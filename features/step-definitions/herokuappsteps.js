const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page');
const ChallengeDomPage = require('../pageobjects/challengedom.page');
const AddRemovePage = require('../pageobjects/addRemove.page');
const LoginPage = require('../pageobjects/login.page');

const pages = {
    home: HomePage,
    challengeDom: ChallengeDomPage,
    addRemove: AddRemovePage,
    login: LoginPage,
}

    Given("I am on the heroku app homepage", async () => {
        browser.url("https://the-internet.herokuapp.com/");
    });

    When("I click on add-remove elements", async () => {
        await pages.home.addRemoveElementsLink.click();
    });

    Then("I should see the add-remove elements page", async () => {
        await expect(pages.addRemove.content).toBeExisting();
        await expect(pages.addRemove.content).toHaveTextContaining('Add/Remove Elements');
    });

    Then("I can add an element to the page", async () => {
        const before = await pages.addRemove.countNumberOfDeleteButtons();
        await pages.addRemove.addButton.click();
        const after = await pages.addRemove.countNumberOfDeleteButtons();
        await expect(after).toEqual(before + 1);   
    });

    Then("I can remove an element from the page", async () => {
        const before = await pages.addRemove.countNumberOfDeleteButtons();
        await pages.addRemove.deleteButton.click();
        const after = await pages.addRemove.countNumberOfDeleteButtons();
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
        let tableRow = await pages.challengeDom.findRowIndexOfCell(string);
        await expect(tableRow).toEqual(string2);
    });

    Then("I can verify that I see the value {string} in the correct column {string}", async (string, string2) => {
        let ColumnHeader = await pages.challengeDom.getColumnHeaderTitle(string);
        await expect(ColumnHeader).toEqual(string2);
    });






    When("I click on form authentication", async () => {
        (await pages.home.formAuthLink).click();
    });

    When("I enter the username {string} and password {string}", async (string, string2) => {
        await pages.login.enterLoginDetails(string, string2);
    });

    Then("I am succesfully logged in", async () => {
        let flashmessage = await  pages.login.getFlashText();
        await expect(flashmessage).toContain("logged into");
    });

    Then("I can log back out", async () => {
        (await pages.login.logoutButton).click();
        let flashmessage = await  pages.login.getFlashText();
        await expect(flashmessage).toContain("logged out of");
    });



    
    Then("I get the correct error message {string}", async (string) => {
        let flashMessage = await  pages.login.getFlashText();
        await expect(flashMessage).toContain(string);
    });