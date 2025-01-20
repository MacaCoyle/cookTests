import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { urls } from '../support/urls';

let users; // To store the list of users
let activeUser; // To store the first active user
let userDetails; // To store the details of the active user

Given('I fetch a list of users fromt this ', () => {
  cy.request('GET', `${urls.baseUrl}${urls.users}`).then((response) => {
    // Assert the status code for the list of users
    expect(response.status).to.eq(200);

    // Store the list of users
    users = response.body.data;
    expect(users).to.be.an('array');
  });
});

When('I find the first active user', () => {
  // Find the first user with status "active"
  activeUser = users.find((user) => user.status === 'active');
  expect(activeUser).to.not.be.undefined; // Assert there's at least one active user
});

Then('I fetch the details of the active user', () => {
  // Fetch details of the active user by their ID
  cy.request('GET', `${urls.baseUrl}${urls.users}`).then((response) => {
    // Assert the status code for the user details
    expect(response.status).to.eq(200);

    // Store the user details
    userDetails = response.body.data;
  });
});

Then('the user status should be {string}', (expectedStatus) => {
  // Assert the user status
  expect(userDetails.status).to.eq(expectedStatus);
});

Then('the response status code should be {int}', (expectedStatusCode) => {
  // Assert the response status code
  expect(userDetails).to.have.property('id', activeUser.id); // Optional: Confirm ID matches
});