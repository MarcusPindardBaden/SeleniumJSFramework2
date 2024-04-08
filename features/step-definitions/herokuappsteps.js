const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page');
const ChallengeDomPage = require('../pageobjects/challengedom.page');
const AddRemovePage = require('../pageobjects/addRemove.page');

const pages = {
    home: HomePage,
    challengeDom: ChallengeDomPage,
    addRemovePage: AddRemovePage,
}

    Given("I am on the heroku app homepage", async () => {
        browser.url("https://the-internet.herokuapp.com/");
    });

    When("I click on add-remove elements", async () => {
        (await pages.home.addRemoveElementsLink).click();
    });

    Then("I should see the add-remove elements page", async () => {
        await expect(pages.addRemovePage.content).toBeExisting();
        await expect(pages.addRemovePage.content).toHaveTextContaining('Add/Remove Elements');
    });

    Then("I can add an element to the page", async () => {
        const before = await pages.addRemovePage.countNumberOfDeleteButtons();
        await pages.addRemovePage.addButton.click();
        const after = await pages.addRemovePage.countNumberOfDeleteButtons();
        await expect(after).toEqual(before + 1);   
    });

    Then("I can remove an element from the page", async () => {
        const before = await pages.addRemovePage.countNumberOfDeleteButtons();
        await pages.addRemovePage.deleteButton.click();
        const after = await pages.addRemovePage.countNumberOfDeleteButtons();
        await expect(after).toEqual(before - 1);
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

