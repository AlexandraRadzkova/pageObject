Feature: If calculate savings page works well
    Check if savings calculates after clicking calculate my savings button

    Scenario: Fill calculate my savings form and click calculate my savings button
        Given home page
        When I click moneyMadeEasyLink
        And I click toolsAndCalc
        And I click savingsCalc
        And I select saveEachMonthRadioButton radio button
        And I fill amount field with '500'
        And I fill existingSavings field with '300'
        And I fill grossInterestRate field with '90'
        And I click calcMySavingsButton
        And I wait for saveEachMonthResults to be visible
        Then I should see saveEachMonthResults
