@sanity
Feature: Login Functionality

  Scenario: Valid login
    Given user navigates to login page
    When user logs in with valid credentials
    Then user should see the dashboard

  @sanity
  Scenario Outline: Valid login with multiple users
    Given user navigates to login page
    When user logs in with username "<username>" and password "<password>"
    Then user should see the dashboard

    Examples:
      | username | password  |
      | Admin    | admin123  |
      | Admin    | admin123  |
