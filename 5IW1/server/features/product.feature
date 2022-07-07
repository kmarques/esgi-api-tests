Feature: Product

    Scenario: should return all products
        Given I have no resources
        When I call "GET" "/products"
        Then I should get a 200 response code
        And I should get an empty array


    Scenario: should create a product
        Given I have a payload
            | name        | Product 1         |
            | description | This is a product |
        When I call "POST" "/products" with the payload
        Then I should get a 201 response code
        And The property "id" should be present in the response
        And The property "name" should be "Product 1"