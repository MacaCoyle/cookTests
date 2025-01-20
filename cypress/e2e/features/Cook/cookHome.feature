Feature: CookUnity Meal Plan Selection

    Scenario: Start meal plan flow
        Given I am on the "COOKUNITY" homepage
        When I enter the zip code "10001"
        And I skip the quiz
        And I select the 6 meals plan
        And I fill the input email with "qa.mail@gmail.com"
        And I fill the input password with "asdqwe123"
        And I submit login form
        Then The URL should contain "en/meal-select"
