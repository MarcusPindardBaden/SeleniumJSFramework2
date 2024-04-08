Feature: The Internet Guinea Pig Website
@current
  Scenario: As a user, I can add and remove elements on the add/remove elements page

    Given I am on the heroku app homepage
    When I click on add-remove elements
    Then I should see the add-remove elements page
    And I can add an element to the page
    And I can remove an element from the page


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


