Feature: API User Management

  Scenario: Verify active user details
    Given I fetch a list of users
    When I find the first active user
    Then I fetch the details of the active user
    And the user status should be "active"
    And the response status code should be 200