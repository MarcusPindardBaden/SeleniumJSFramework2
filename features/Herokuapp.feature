Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can go to the A/B test page

    Given I am on the heroku app homepage
    When I click on AB test
    Then I should see the AB test page

