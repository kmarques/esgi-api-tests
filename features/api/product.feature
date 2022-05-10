Feature: Product

    Scenario: I should see all products
        When I request "GET" "/products"
        Then I should have an empty array
        And I should have an array with 0 elements

    Scenario: I should create a new product
        Given I have payload
            | name  | test |
            | price | 100  |
        When I request "POST" "/products" with payload
        Then The response status should be 201
        And I should have an object with the following attributes
            | name | test |
        And I should have the "id" attribute

    @Fixture
    Scenario: I should retrieve the product product1
        When I request "GET" "/products/{{product1.id}}"
        Then The response status should be 200
        And I should have an object with the following attributes
            | name | Product1 |

    @Fixture
    Scenario: I should not retrieve the product unknown
        When I request "GET" "/products/-1"
        Then The response status should be 404
        And I should have an empty body