@sanity
Feature: Login Functionality

  Scenario: Valid login
    Given user navigates to login page
    When user logs in with valid credentials
    Then user should see the dashboard