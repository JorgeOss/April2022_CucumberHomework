$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Feature_Techfios_Bank_And_Cash.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Users enters the \"\u003cusername\u003e\" in \"username\" field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Users enters the \"\u003cpassword\u003e\" in \"password\" field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters \"\u003caccountTitle\u003e\" in \"accountTitle\" field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters \"\u003cdescription\u003e\" in \"description\" field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters \"\u003cinitialBalance\u003e\" in \"initialBalance\" field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"\u003caccountNumber\u003e\" in \"accountNumber\" field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters \"\u003ccontactPerson\u003e\" in \"contactPerson\" field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"\u003cPhone\u003e\" in \"Phone\" field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003cinternetBankingURL\u003e\" in \"internetBankingURL\" field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on Submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankingURL"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Vanessa Stewart",
        "Checkings",
        "100",
        "3247",
        "Ashley Morgan",
        "87",
        "https://www.CapitalOne.net"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3226454900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Users enters the \"demo@techfios.com\" in \"username\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Users enters the \"abc123\" in \"password\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters \"Vanessa Stewart\" in \"accountTitle\" field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters \"Checkings\" in \"description\" field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters \"100\" in \"initialBalance\" field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"3247\" in \"accountNumber\" field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters \"Ashley Morgan\" in \"contactPerson\" field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"87\" in \"Phone\" field",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"https://www.CapitalOne.net\" in \"internetBankingURL\" field",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on Submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 1533733100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 18
    },
    {
      "val": "username",
      "offset": 41
    }
  ],
  "location": "StepDefinition.users_enters_the_in_field(String,String)"
});
formatter.result({
  "duration": 3167747300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    },
    {
      "val": "password",
      "offset": 30
    }
  ],
  "location": "StepDefinition.users_enters_the_in_field(String,String)"
});
formatter.result({
  "duration": 3114014800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login()"
});
formatter.result({
  "duration": 9390897600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 55641900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_bankCash()"
});
formatter.result({
  "duration": 1124471700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 617116200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vanessa Stewart",
      "offset": 13
    },
    {
      "val": "accountTitle",
      "offset": 34
    }
  ],
  "location": "StepDefinition.user_enters_in_field(String,String)"
});
formatter.result({
  "duration": 1296510000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkings",
      "offset": 13
    },
    {
      "val": "description",
      "offset": 28
    }
  ],
  "location": "StepDefinition.user_enters_in_field(String,String)"
});
formatter.result({
  "duration": 1136932100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 13
    },
    {
      "val": "initialBalance",
      "offset": 22
    }
  ],
  "location": "StepDefinition.user_enters_in_field(String,String)"
});
formatter.result({
  "duration": 1149614000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3247",
      "offset": 13
    },
    {
      "val": "accountNumber",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_in_field(String,String)"
});
formatter.result({
  "duration": 1144710900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ashley Morgan",
      "offset": 13
    },
    {
      "val": "contactPerson",
      "offset": 32
    }
  ],
  "location": "StepDefinition.user_enters_in_field(String,String)"
});
formatter.result({
  "duration": 1148007900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "87",
      "offset": 13
    },
    {
      "val": "Phone",
      "offset": 21
    }
  ],
  "location": "StepDefinition.user_enters_in_field(String,String)"
});
formatter.result({
  "duration": 1124174700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.CapitalOne.net",
      "offset": 13
    },
    {
      "val": "internetBankingURL",
      "offset": 45
    }
  ],
  "location": "StepDefinition.user_enters_in_field(String,String)"
});
formatter.result({
  "duration": 1175384500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Submit()"
});
formatter.result({
  "duration": 3226207300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 8064371600,
  "status": "passed"
});
formatter.after({
  "duration": 890403900,
  "status": "passed"
});
});