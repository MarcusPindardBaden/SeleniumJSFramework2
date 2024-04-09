Hi there, welcome to my WebdriverIO test suite

Use the following commands in the terminal/your respective command line:

After pulling down the repo run npm install to download all the node modules

To run all tests run npm run test. This will also generate a report of the results

To run a specific tag run npm run tagTest followed by the tag, e.g. npm run tagTest @current

The report won't get generated if one of the tests fails so to generate the report again hit npm run report. Any failed tests should have a screenshot attached in the report to help with debugging.

You will want to clear reuslts regularly as they build up in the allure-report otherwise. To clear the results hit either:
* rm -r allure-results if on Windows
* rmdir allure-results if on Mac

Make sure you have administrator permissions otherwise you could get blocked