Feature: Product

    #Scenario: I should see all products
    #    When I request "GET" "/products"
    #    Then I should have an empty array
    #    And I should have an array with 0 elements
    #
    #Scenario: I should create a new product
    #    Given I have payload
    #        | name  | test |
    #        | price | 100  |
    #    When I request "POST" "/products" with payload
    #    Then The response status should be 201
    #    And I should have an object with the following attributes
    #        | name | test |
    #    And I should have the "id" attribute
    #
    #Scenario: I should retrieve the product product1
    #    When I request "GET" "/products/{{product1.id}}"
    #    Then The response status should be 200
    #    And I should have an object with the following attributes
    #        | name | Product1 |
    #
    #Scenario: I should not retrieve the product unknown
    #    When I request "GET" "/products/-1"
    #    Then The response status should be 404
    #    And I should have an empty body

    Scenario: I should get all product
        Given I load fixtures "product.json"
        And I am authenticated with "product2"
        When I request "GET" "/products/{{product3.id}}"
        And I should have an object with the following attributes
            | name | {{product2.name}} |

