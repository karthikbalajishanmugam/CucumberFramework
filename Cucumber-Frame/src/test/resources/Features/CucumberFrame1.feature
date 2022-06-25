#Author: your.Karthikbalaji@your.domain.com


Feature: TV Purchase
 
  Background:
    Given User launch Flipkart application 
    And User should login Flipkart with valid Credentials
    
    Scenario: TV
    
    When User Seacrh the Tv brand and Choose Tv Model
    And User Should Add the Selected TV To addToCart and Make a Payment
    Then User Should Receive and Valided The Confermation Message
    
    @Sanity
    Scenario: TV using list
    
    When User Seacrh the Tv brand and Choose Tv Modeln using list
    |Realme tv|OnePluse TV|Samsung TV|
    And User Should Add the Selected TV To addToCart and Make a Payment
    Then User Should Receive and Valided The Confermation Message
   @Sanity
   Scenario: TV using Map
    When User Seacrh the Tv brand and Choose Tv Modeln using Map
    |TV1|Realme tv|
    |TV2|OnePluse TV|
    |TV3|Samsung TV|
    And User Should Add the Selected TV To addToCart and Make a Payment
    Then User Should Receive and Valided The Confermation Message
 
  
    @Sanity
    Scenario Outline:
    When User Seacrh the Tv brand and Choose Tv Model"<Phone>"
    And User Should Add the Selected TV To addToCart and Make a Payment
    Then User Should Receive and Valided The Confermation Message
    
    Examples:
    |Phone|
    |Realme tv|
    |OnePluse TV|
    |Samsung TV|
    
    
    

 
