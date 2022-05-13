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
        And I should receive an element with the following attributes
            | name | "Product 1" |

    Scenario: Get a product
        Given I load fixtures "product.json"
        When I request "GET" "/products/{{knife2.id}}"
        Then I should receive an element with the following attributes
            | name | {{knife1.name}} |

    Scenario: Update a product
        Given I load fixtures "user.json,product.json"
        And I am authenticated as "admin"
        And I have a payload
            | name | "Product 2" |
        When I request "PUT" "/products/{{knife2.id}}"
        And the response code should be 200
        Then I should receive an element with the following attributes
            | name | "Product 2" |