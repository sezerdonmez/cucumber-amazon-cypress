Feature: Prime Page


    As a valid user
    I want to view prime page

    Scenario: View Sticky Header When Hover On Carousel Card From Prime Page 
        Given I open "prime" page
        And I accept cookies
        When I hover mouse to "carousel card"
        Then I should see that the prime sticky header
        And I should see that the "prime logo" on sticky header
        And I should see that the "30daysfree button" on sticky header 
        
    Scenario: View Next Carousel Card From Prime Page
        Given I open "prime" page
        And I accept cookies
        When I hover mouse to "carousel card"
        And I click "next" button for viewing next carousel card
        Then I should see that the  "Bedava ve Hızlı Kargo" carousel card
        But I should not see that the "ERTESİ GÜN TESLİMAT" carousel card
    
    Scenario: View Previous Carousel Card From Prime Page
        Given I open "prime" page
        And I accept cookies
        When I hover mouse to "carousel card"
        And I click "previous" button for viewing next carousel card
        Then I should see that the  "PRIME GAMING" carousel card
        But I should not see that the "ERTESİ GÜN TESLİMAT" carousel card

    Scenario: View Carousel Card On Category Deals Card From Prime Page
        Given I open "prime" page
        And I accept cookies
        When I hover mouse to "carousel card"
        And I click "Prime Video" on category deals
        Then I should see that the  "PRIME VIDEO" carousel card
        But I should not see that the "ERTESİ GÜN TESLİMAT" carousel card