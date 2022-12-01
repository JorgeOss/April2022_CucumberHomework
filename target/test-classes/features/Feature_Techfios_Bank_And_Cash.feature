Feature: Techfios bank and cash New Account Functionality

  @Scenario
  Scenario Outline: User should be able to login with valid credentials and open a new account
    Given User is on the techfios login page
    When Users enters the "<username>" in "username" field
    When Users enters the "<password>" in "password" field
    And User clicks on login
    Then User should land on Dashboard page
    And User clicks on bankCash
    And User clicks on newAccount
    And User enters "<accountTitle>" in "accountTitle" field
    And User enters "<description>" in "description" field
    And User enters "<initialBalance>" in "initialBalance" field
    And User enters "<accountNumber>" in "accountNumber" field
    And User enters "<contactPerson>" in "contactPerson" field
    And User enters "<Phone>" in "Phone" field
    And User enters "<internetBankingURL>" in "internetBankingURL" field
    And User clicks on Submit
    Then User should be able to validate account created successfully

    Examples: 
      | username          | password | accountTitle    | description | initialBalance | accountNumber | contactPerson | Phone | internetBankingURL |
      | demo@techfios.com | abc123   | Vanessa Stewart | Checkings   |            100 |          3247 | Ashley Morgan |    87 |https://www.CapitalOne.net |
