Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can go to the A/B test page

    Given I am on the heroku app homepage
    When I click on AB test
    Then I should see the AB test page

@current
    Scenario Outline: As a user, I can view a specific element in the challengeDom table

    Given I am on the heroku app homepage
    When I click on challenge Dom
    Then I should see the challenge Dom page
    And I can verify that I see the value "<value>" in the correct row "<row>" 
    And I can verify that I see the value "<value>" in the correct column "<column>"
    Examples:
    | value | row | column |
    | Apeirian7 | 8 | Ipsum | 
    | Consequuntur4 | 5 | Amet |
    | Definiebas1 | 2 | Sit |


