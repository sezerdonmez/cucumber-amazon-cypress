Feature: Hamburger Menu

    As a valid user
    I want to use hamburger menu

    Scenario: View Newly Added Page With Using Hamburger Menu From Homepage
        Given I open home page
        And  I accept cookies
        When I click hamburger menu
        And I click "Yeni Çıkanlar" on hamburger menu
        Then I should see that the "Yeni Çıkan Ürünler" page

    Scenario: View Category Page With Using Hamburger Menu From Homepage
        Given I open home page
        And I accept cookies
        When I click hamburger menu
        And I click "Bebek" on hamburger menu
        And I click "Bebek Bezleri" on "Bebek" category menu
        Then I should see that the "Bebek Bezleri" category page

    Scenario: View Full Category Names With Using Hamburger Menu From Homepage
        Given I open home page
        And I accept cookies
        When I click hamburger menu
        And I click 'show all' button
        Then I should see that the 'show less' button

    Scenario: Check If Hamburger Menu Show More And Show Less Buttons Working Correctly From Homepage
        Given I open home page
        And I accept cookies
        When I click hamburger menu
        And I click 'show all' button
        And I click 'show less' button
        Then I should see that the 'show all' button