import { Given } from "@badeball/cypress-cucumber-preprocessor";
Given(`I am on the {string} homepage`, (urlName) =>{
    const url = Cypress.env(`${urlName.toUpperCase()}_URL`);
    cy.visit(url);
});
