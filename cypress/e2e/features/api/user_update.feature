Feature: Update User Details

  Scenario: Modify the name of the first user
    Given I fetch a list of users
    When I update the name of the first user to "Updated User"
    Then the response status code should be 200
    And the user's name should be "Updated User"