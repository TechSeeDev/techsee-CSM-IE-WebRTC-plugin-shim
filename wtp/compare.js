const fs = require ('fs');
const results = 
{
	ie      : require("../internet explorer.json"),
	chrome  : require("../chrome.json"),
	firefox : require("../firefox.json")
};


var merged = {};

for (let browser in results)
{
	
	//Get rests
	const result = results[browser];
	
	for (let name in result)
	{
		//Get merged test page
		let line = merged[name];
		//Add test
		if (!line)
			line = merged[name] = {
				results : {},
				total : 0,
				passed : {}
			};
		//Some test fail, so totals are not the same for all browsers
		if (result[name].total>line.total)
			//Get max
			line.total = result[name].total;
		//Set passed for browser
		line.passed[browser] = result[name].passed;
		//For each test
		for (let i=0;i<result[name].tests.length;++i)
		{
			//get test
			const test = result[name].tests[i];
			//Add it to merged
			if (!line.results[test.name])
				line.results[test.name] = {};
			line.results[test.name][browser] = test.status;
		}
	}
}

let markdown = "# Web Platform test results";

markdown += "||Test|IE|Chrome|Firefox|\r\n";
markdown += "|---|---|---|---|---|\r\n";

function result(status)
{
	return status===1 ? ":white_check_mark:" : ":x:";
}
let total = 0;
let ie = 0;
let chrome = 0;
let firefox = 0;
for (let name in merged)
{
	const page = merged[name];
	markdown += "|:hammer:| **" + name + "**||||\r\n";
	//For each test
	for (let test in page.results)
	{
		const results = page.results[test];
		markdown += "||" + test + "|" + result(results.ie) + "|"  +  result(results.chrome) + "|"  +  result(results.firefos) + "|\r\n" ;
	}
	markdown += "||`Test Total` |" + page.passed.ie + "/" + page.total + "|" + page.passed.chrome  + "/" + page.total + "|" + page.passed.firefox  + "/" + page.total + "|\r\n";
	total += page.total;
	ie += page.passed.ie;
	chrome += page.passed.chrome;
	firefox += page.passed.firefox;
}

markdown += "||`Totals` |" + ie + "/" + total + "|" + chrome  + "/" + total + "|" + firefox  + "/" + total + "|\r\n";

//Write html header
fs.writeFileSync ("tests_results.md", markdown);
