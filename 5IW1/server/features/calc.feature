Feature: test calc

    Scenario: add two numbers
        Given I have entered 50 into the calculator
        And I have entered 70 into the calculator
        When I press "add"
        Then the result should be 120 on the screen

    Scenario: subtract two numbers
        Given I have entered 50 into the calculator
        And I have entered 70 into the calculator
        When I press "subtract"
        Then the result should be -20 on the screen

    Scenario: multiply two numbers
        Given I have entered 50 into the calculator
        And I have entered 70 into the calculator
        When I press "multiply"
        Then the result should be 3500 on the screen

    Scenario: divide two numbers
        Given I have entered 50 into the calculator
        And I have entered 50 into the calculator
        When I press "divide"
        Then the result should be 1 on the screen