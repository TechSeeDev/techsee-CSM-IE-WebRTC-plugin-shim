const {Builder, By, Key, until} = require ('selenium-webdriver');
const fs	= require ('fs');
const serve	= require('serve');

async function run(driver,test)
{
	await driver.get ('http://localhost:8000/webrtc/'+test);
	await driver.wait (until.elementLocated (By.id('log')), 10000);
	return  html =  await driver.executeScript("return log.outerHTML;");
}

function trowError(err)
{
	console.error(err);
	
}

async function runall(tests,out) 
{
	
	fs.writeFileSync(out, '<html><head><link rel="stylesheet" href="https://cdn.rawgit.com/w3c/web-platform-tests/03bbca89/resources/testharness.css"></head><body>', trowError);
	
	//Create driver
	const driver = await new Builder ().forBrowser ('internet explorer').build ();
	
	try {
		for (let i=0; i<tests.length; ++i)
		{
			const test = tests[i];
			console.log("running test:" + test);
			fs.appendFileSync(out, "<h1>"+test+"</h1>",  trowError);
			try {
				const html = await run(driver,test);

				fs.appendFileSync(out, html,  trowError);
				console.log("test competed");
			} catch (e) {
				console.log("test failed" + e);
			}
		}
	} catch (e) {
		console.error(e);
	} finally {
		driver.quit();
	}	
	
	fs.appendFileSync(out, '</body></html>', trowError);
}

let tests = [];
const www = "./wtp";

//Create web server on port 8000
const server = serve(www, {port: 8000});

//Get all html tests
fs.readdirSync(www + "/webrtc")
	.forEach (function(file) {
		file.match(/\.html$/) && tests.push(file);
	});

//Run all test 
runall(tests,"out.html");
