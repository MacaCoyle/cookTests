import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const cookHome = require ("../../pages/cookpage");
const cookLogin = require ("../../pages/cookLogin")

When(`I enter the zip code {string}`, (zipcode) => {
 cookHome.getZipCodeInput().type(zipcode);
 cookHome.getSearchBtn().click();
});

When(`I skip the quiz`,() => {
cy.wait(2000)
 cookHome.getSkipAllLink().click({ force: true });
});

When(`I select the 6 meals plan`, () => {
    cy.wait(2000)
    cookHome.getNumbersOfMealsBtn().click({ force: true });
    cy.wait(2000)
    cookHome.getContinueBtn().click({ force: true });
    cy.wait(2000)
  });

Then(`I fill the input email with {string}`, (email,) => {
    cy.wait(2000)
    cookLogin.getLoginLink().click({ force: true });
    cy.wait(4000)
    cookLogin.getLoginAccountLink().click({ force: true });
    cy.wait(4000)
    cookLogin.getEmailInput().type(email);
    cy.wait(4000)
});

Then(`I fill the input password with {string}`, (password) => {
    cy.wait(4000)
    cookLogin.getPassworInput().type(password);
    cy.wait(5000)
});

Then(`I submit login form`, () => {
    cy.wait(2000)
    cookLogin.getLoginBtn().click({ force: true });
    cy.wait(5000)
   });


   Then(`the URL should contain {string}`, (mealSelect) => {
    cookLogin.getLoginBtn().click();
    cy.wait(6000)
    cy.url({ timeout: 10000 }).should('include', mealSelect);
    cy.wait(4000)
    cy.get('[data-testid="meal-card"]') 
    .should('exist') 
    .its('length') 
    .should('be.gte', 2); 
   });   
