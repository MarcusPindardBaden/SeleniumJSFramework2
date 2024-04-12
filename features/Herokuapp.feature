Feature: The Internet Guinea Pig Website

  # Scenario: As a user, I can add and remove elements on the add/remove elements page

  #   Given I am on the heroku app homepage
  #   When I click on add-remove elements
  #   Then I should see the add-remove elements page
  #   And I can add an element to the page
  #   And I can remove an element from the page


  #  Scenario Outline: As a user, I can view a specific element in the challengeDom table

  #   Given I am on the heroku app homepage
  #   When I click on challenge Dom
  #   Then I should see the challenge Dom page
  #   And I can verify that I see the value "<value>" in the correct row "<row>" 
  #   And I can verify that I see the value "<value>" in the correct column "<row>" "<column>"
  #   Examples:
  #   | value | row | column |
  #   | Apeirian7 | 8 | Ipsum | 
  #   | Consequuntur4 | 5 | Amet |
  #   | Definiebas1 | 2 | Sit |



    
    Scenario Outline: As a user, I can successfully login via the form

    Given I am on the heroku app homepage
    When I click on form authentication
    And I enter the username "<username>" and password "<password>" 
    Then I am succesfully logged in
    And I can log back out
    Examples:
    | username | password | 
    | tomsmith | SuperSecretPassword! |
    

    # Scenario Outline: As a user, I get the correct error message on failed login

    # Given I am on the heroku app homepage
    # When I click on form authentication
    # And I enter the username "<username>" and password "<password>" 
    # Then I get the correct error message "<error>"
    # Examples:
    # | username | password | error |
    # | user123 | password | username is invalid |
    # | tomsmith | password | password is invalid |
    # | user123 | SuperSecretPassword! | username is invalid |

