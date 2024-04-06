const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');
const ABTestPage = require('../pageobjects/abtest.page');
const abtestPage = require('../pageobjects/abtest.page');

const pages = {
    login: LoginPage,
    home: HomePage,
    abTest: ABTestPage
}

    Given("I am on the heroku app homepage", async () => {
        browser.url("https://the-internet.herokuapp.com/")
    });

    When("I click on AB test", async () => {
            await pages.home.abLink.click();
    });

    Then("I should see the AB test page", async () => {
        await expect(pages.abTest.content).toBeExisting();
        await expect(pages.abTest.content).toHaveTextContaining('A/B Test Control');
    });



    When("I click on challenge Dom", async () => {
    });

    Then("I should see the challenge Dom page", async () => {
    });

    Then("I can verify that I see {string} in the correct {string} and {string}", async (string, string2, string3) => {
        });

