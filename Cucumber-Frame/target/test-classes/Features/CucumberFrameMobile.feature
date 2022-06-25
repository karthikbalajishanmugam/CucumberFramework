#Author: your.email@your.domain.com

Feature: Mobile Purchase
  I want to use this template for my feature file

@Sanity
  Scenario: mobile
    Given User launch Flipkart application 
    And User should login Flipkart with valid Credentials
    When User Seacrh the Mobile brand and Choose Mobile Model
    And User Should Add the Selected Mobile To addToCart and Make a Payment
    Then User Should Receive and Valided The Confermation Message
