const {Builder, By, Key, until} = require ('selenium-webdriver');
const figures = require ('figures');
const style = require ('ansi-styles');
const fs = require ('fs');
const serve = require ('serve');

async function run (driver, test)
{
	await driver.get ('http://localhost:8000/webrtc/' + test + ".html");
	await driver.wait (until.elementLocated (By.id ('log')), 30000);
	await driver.wait (until.elementLocated (By.id ('__testharness__results__')), 30000);
	var results = await driver.executeScript (function () {
		var results = JSON.parse (__testharness__results__.innerText);
		var total = results.tests.length;
		var passed = 0;
		for (var i = 0; i < total; ++i)
			if (results.tests[i].status === 0)
				passed++;
		return {
			total   : total,
			passed  : passed,
			status  : results.status,
			message : results.message,
			tests   : results.tests
		};
	});
	var html = await driver.executeScript ("return log.outerHTML;");
	return {
		tests: results,
		html: html
	};
}

function trowError (err)
{
	console.error (err);

}

const TEST_STATUSES = {
        PASS:0,
        FAIL:1,
        TIMEOUT:2,
        NOTRUN:3
    };
var status_text = {};
    status_text[TEST_STATUSES.PASS] = "Pass";
    status_text[TEST_STATUSES.FAIL] = "Fail";
    status_text[TEST_STATUSES.TIMEOUT] = "Timeout";
    status_text[TEST_STATUSES.NOTRUN] = "Not Run";

async function runall (tests, browser)
{
	let driver;
	//Create filenames
	const out  = browser + ".html";
	const json = browser + ".json";
	
	try {
		//Create driver
		driver = await new Builder ().forBrowser (browser).build ();
	} catch (e) {
		console.error(e);
		return;
	}
	

	//Write html header
	fs.writeFileSync (out, '<html><head><link rel="stylesheet" href="https://cdn.rawgit.com/w3c/web-platform-tests/03bbca89/resources/testharness.css"></head><body>', trowError);

	
		
	let total = 0;
	let passed = 0;
	let results = {};
	
	try {
		for (let i = 0; i < tests.length; ++i)
		{
			const test = tests[i];
			process.stdout.write ("running test: " + test);
			fs.appendFileSync (out, "<h1>" + test + "</h1>", trowError);
			try {
				const result = await run (driver, test);
				
				//Acumulate
				results[test] = result.tests;
				total += result.tests.total;
				passed += result.tests.passed;
				
				//Add html to output
				fs.appendFileSync (out, result.html, trowError);			
				
				//Check resutls
				if (result.tests.status==0)
				{
					//Log
					process.stdout.clearLine ();
					process.stdout.cursorTo (0);
					process.stdout.write (style.color.green.open + figures.tick + style.color.close + " " + test + " [" + result.tests.passed + "/" + result.tests.total + "]\r\n");
				} else {
					//Log
					process.stdout.clearLine ();
					process.stdout.cursorTo (0);
					var message = status_text[result.tests.status] + (result.tests.message ? ": " + result.tests.message : "");
					process.stdout.write (style.color.red.open + figures.cross + style.color.close + " " + test + " (" + message + ") [" + result.tests.passed + "/" + result.tests.total + "]\r\n");
				}
			} catch (e) {
				//Add html to output
				fs.appendFileSync (out, e, trowError);
				//Log
				process.stdout.clearLine ();
				process.stdout.cursorTo (0);
				process.stdout.write (style.color.red.open + figures.cross + style.color.close + " " + test + " [" + e + "]\r\n");
			}
		}
	} catch (e) {
		console.error (e);
	} finally {
		driver.quit ();
	}
	//Write html footer
	fs.appendFileSync (out, '</body></html>', trowError);
	//Write json
	fs.writeFileSync (json, JSON.stringify(results), trowError);
	//Log
	process.stdout.write (style.color.green.open + "TOTAL [" + passed + "/" + total + "]\r\n"+ style.color.close);
	//Terminate
	process.exit(0);
}

let tests = [];
const www = "./wtp";

//Create web server on port 8000
const server = serve (www, {port: 8000});

//Get all html tests
fs.readdirSync (www + "/webrtc")
	.forEach (function (file) {
		file.match (/\.html$/) && tests.push (file.replace (".html", ""));
	});

//Default
let browser = 'internet explorer';

//Check 
if (process.argv.length==3)
	 //Get it
	browser = process.argv[2];

//Run all test 
runall (tests, browser);


