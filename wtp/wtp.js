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
			total : total,
			passed : passed,
			status : results.status,
			message : results.message
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



async function runall (tests, out)
{

	fs.writeFileSync (out, '<html><head><link rel="stylesheet" href="https://cdn.rawgit.com/w3c/web-platform-tests/03bbca89/resources/testharness.css"></head><body>', trowError);

	//Create driver
	const driver = await new Builder ().forBrowser ('internet explorer').build ();

	let total = 0;
	let passed = 0;
	try {
		for (let i = 0; i < tests.length; ++i)
		{
			const test = tests[i];
			process.stdout.write ("running test: " + test);
			fs.appendFileSync (out, "<h1>" + test + "</h1>", trowError);
			try {
				const result = await run (driver, test);
				//Check resutls
				if (result.tests.status!=0)
					throw result.tests.message;
				//Acumulate
				total += result.tests.total;
				passed += result.tests.passed;
				//Add html to output
				fs.appendFileSync (out, result.html, trowError);
				//Log
				process.stdout.clearLine ();
				process.stdout.cursorTo (0);
				process.stdout.write (style.color.green.open + figures.tick + style.color.close + " " + test + " [" + result.tests.passed + "/" + result.tests.total + "]\r\n");
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
	fs.appendFileSync (out, '</body></html>', trowError);
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

//Run all test 
runall (tests, "out.html");


