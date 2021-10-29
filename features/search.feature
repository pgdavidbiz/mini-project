Feature: Search Functionality

    @TestCase1
    Scenario Outline: As a user, I can search by product

    Given I am on the home page
    When I search with <SearchedItem> and click Search Button
    And I filter by <Price>, <Color> and <Conditionr> 
    And user select a product with <ProductSKU> SKU
    Then Product details is displayed

    Example:
    |    SearchedItem       |       Price           |         Color         |      Condition      |     ProductSKU      |
    |     Television        |  $1250 - $1499.99     |         Black         |      Open-Box       |      6453324        |
    |     Phone             |   $750 - $999.99      |         Blue          |     Refurbished     |      6443180        |
    |     Watch             |   $500 - $749.99      |         Gold          |         New         |      6339663        |



    @TestCase2
    Scenario: As a user, I can search by Brand

    Given user navigates to the website bestbuy.com
    When user enters a brand as <SearchedItem> in Search field and click Search Button
    And user select <Category> and <SubCategory>
    And user filter by <ScreenSize>, <StorageCapacity> 
    And user select a product with <ProductSKU> SKU
    Then Product details is displayed

    Example:
    |   SearchedItem  |    Category       |     SubCategory          |ScreenSize     |     StorageCapacity      |     ProductSKU      |
    |    Samsung      |    Computing      |     Laptops              | 12" - 14.9"   |      500 GB and up       |      6457789        |


    @TestCase3
    Scenario: As a user, I can search by Store Department

    Given user navigates to the website bestbuy.com
    When user enters store Department as <SearchedItem> in Search field and click Search Button
    And user select <Category> and <SubCategory>
    And user filter by <Location> and press the Go button 
    And user select a product with <ProductSKU> SKU
    Then Product details is displayed

    Example:
    |  SearchedItem   |            Category              |              SubCategory          |     Location      |     ProductSKU      |
    |    Appliances   |    Major Kitchen appliances      |    Shop  refrigerators on sale    |       19152       |      6417768        |


    @TestCase4
    Scenario: As a user, I can search for Deals

    Given user navigates to the website bestbuy.com
    When user enters a deal type as <SearchedItem> in Search field and click Search Button
    And user select <Category> and <SubCategory>
    And user filter by <Price>
    And user select a product with <ProductSKU> as SKU
    Then Product details is displayed

    Example:
    |  SearchedItem   |           Category       |    SubCategory   |       Price      |     ProductSKU      |
    |    Top Deals    |         Black Friday     |    Headphones    |   $50 - $74.99   |      6423274        |


    @TestCase5
    Scenario: As a user, I can search by Featured

    Given user navigates to the website bestbuy.com
    When user enters featured program as <SearchedItem> in Search field and click Search Button
    And user select <Category> 
    And user filter by <Same-day pickup> 
    And user select a product with <ProductSKU> SKU
    Then Product details is displayed

    Example:
 |  SearchedItem   |         Category         |      Get it Fast   |     ProductSKU      |
 |    Gifts        |        Unique Gifts      | Same-days delivery |      6461348        |


