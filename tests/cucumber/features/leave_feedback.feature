Feature: Leave feedback
    Check if feedback can be sent from the gas and electricity page

    Scenario: Leave feedback on Gas and Electricity Page
        Given home page
        When I move mouse to energy
        And I move mouse to solarPowerLink
        And I click solarPowerLink
        And I click switchAndSaveNowButton
        And I wait for feedbackButton to be visible
        And I click feedbackButton
        And I wait for iframeRoot to be visible
        And I switch to iframe
        And I click generalFeedback
        And I switch to default content
        And I switch to iframe
        And I click likeRadioButton
        And I fill feedbackText field with 'LIKE'
        And I click submitButton
        Then I should see successForm
        And I switch to default content
