Feature: Product API

    Scenario: Get all products
        When I request "GET" "/products"
        Then I should receive an empty array
        And the response code should be 200
        And I should receive an array with 0 elements

    Scenario: Create a product
        Given I have a payload
            | name  | "Product 1" |
            | price | 100         |
        When I request "POST" "/products" with payload
        Then I should have a property "id"
        And the response code should be 201
        And I should receive a element with the following attributes
            | name | "Product 1" |