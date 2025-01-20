import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import { urls } from '../support/urls';
import { config } from '../support/config';

let firstUser; // To store the first user
let updateResponse; // To store the response from the update request

Given('I fetch a list of users', () => {
  cy.request({
    method: 'GET',
    url: `${urls.baseUrl}/users`,
  }).then((response) => {
    // Assert the status code for the list of users
    expect(response.status).to.eq(200);

    // Get the first user from the response
    firstUser = response.body.data[0];
    expect(firstUser).to.have.property('id'); // Ensure the user has an ID
  });
});

When('I update the name of the first user to {string}', (newName) => {
  // Send a PATCH request to update the user's name
  cy.request({
    method: 'PATCH',
    url: `${urls.baseUrl}/users/${firstUser.id}`,
    headers: {
      Authorization: '${config.authToken}',
    },
    body: {
      name: newName,
      email: 'jana.waters@hotmail.us',
      status: 'active',
    },
  }).then((response) => {
    // Store the response
    updateResponse = response;
  });
});

Then('the response status code should be {int}', (statusCode) => {
  // Assert the response status code
  expect(updateResponse.status).to.eq(statusCode);
});

Then("the user's name should be {string}", (expectedName) => {
  // Assert the updated name in the response
  expect(updateResponse.body.data.name).to.eq(expectedName);
});