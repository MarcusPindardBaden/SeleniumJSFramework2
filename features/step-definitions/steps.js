const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const ABTestPage = require('../pageobjects/abtest.page');
const ChallengeDomPage = require('../pageobjects/challengedom.page');

const pages = {
    login: LoginPage,
    home: HomePage,
    abTest: ABTestPage,
    challengeDom: ChallengeDomPage
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
        (await pages.home.challengeDomLink).click();
    });

    Then("I should see the challenge Dom page", async () => {
        await expect(pages.challengeDom.content).toBeExisting();
        await expect(pages.challengeDom.content).toHaveTextContaining('Challenging DOM');
    });

    Then("I can verify that I see the value {string} in the correct row {string}", async (string, string2) => {
            let tableRow = await pages.challengeDom.findTableRowOfElement(string);
            await expect(tableRow).toEqual(string2);
    });

    Then("I can verify that I see the value {string} in the correct column {string}", async (string, string2) => {
        let ColumnHeader = await pages.challengeDom.findTableColumnHeaderOfElement(string);
        await expect(ColumnHeader).toEqual(string2);
});

