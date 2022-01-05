Feature: Search Keyword

    As a valid user
    I want to search keywords and categories

    Scenario: Search Keyword With Find Button From Homepage
        Given I open home page
        And  I accept cookies
        When I type "joystick" to search input
        And I click on find button for "joystick" search
        Then I should see that the search result page for "joystick"

    Scenario: Search Keyword With Keyboard Enter Key From Homepage
        Given I open home page
        And  I accept cookies
        When I type "laptop" to search input
        And I press "Enter" key from keyboard
        Then I should see that the search result page for "laptop"

    Scenario: Search Keyword In Category With Auto Complete Sugesstions From Homepage
        Given I open home page
        And I accept cookies
        When I type "bileklik" to search input
        And I click keyword search in category page from auto complete suggestions
        Then I should see that the "Spor" category page for "bileklik" keyword

    Scenario: Search Keyword In Category With Choosing Category On Dropdown Box From Homepage
        Given I open home page
        And I accept cookies
        When I choose "Bilgisayarlar" category on dropdown box
        And I type "lenovo" to search input
        And I click on find button for "lenovo" search
        Then I should see that the "Bilgisayarlar" category page for "lenovo" keyword
 
    Scenario: Search For Category With Dropdown Box From Homepage
        Given I open home page
        And I accept cookies
        When I choose "Kitaplar" category on dropdown box
        And I click on find button for "Kitap" search
        Then I should see that the "Kitap" category page