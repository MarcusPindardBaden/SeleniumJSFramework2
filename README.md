Hi there, welcome to my WebdriverIO test suite

Use the following commands in the terminal/your respective command line:

After pulling down the repo run 'npm install' to download all the node modules

To run all tests run 'npm run test'. This will also generate a report of the results

To run a specific tag run 'npm run tagTest' followed by the tag, e.g. 'npm run tagTest @current'

The report won't get generated if one of the tests fails so to generate the report again hit 'npm run report'. Any failed tests should have a screenshot attached in the report to help with debugging.

You will want to clear reuslts regularly as they build up in the allure-report otherwise. To clear the results hit either:
* 'rm -r allure-results' if on Windows
* 'rmdir allure-results' if on Mac

Make sure you have administrator permissions otherwise you could get blocked

TO TEST ON ANDROID:
* Make sure you have android studio or at least the respective sdk tools downloaded
* Make sure you have Appium installed also
* On one terminal run the command appium to start the appium server up. There should be a port number (e.g. 4723), that can be set in the wdio.conf.js file. Make sure the capabilities also match the emulator you're running
* Start running the emulator
* hit npm run wdio to start the tests. They will currently be failing on the first page as I need to write a before scenario hook to clear the intro message on chrome mobile apps. I'll do this on the next commit

If any steps above are failing check commands such as appium-doctor, adb devices etc are working as there's likely missing files downloaded or paths to be added/bash profiles to be updated