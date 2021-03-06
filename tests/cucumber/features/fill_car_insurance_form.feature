Feature: Fill car insurance form
    Check if continue button on the car insurance form page
    navigates user to associated page

    Scenario: Fill car insurance form and click continue button
        Given home page
        When I click carInsuranceButton
        And I click getNewQuoteButton
        And I should see carInsuranceForm page
        And I fill carRegistrationYear field with '1753'
        # And I fill address field with 'Insure, 384, Clapham Road, London, SW99AR'
        And I fill houseNumber field with '23'
        And I fill postCode field with 'CH5 3UZ'
        And I click findAddressButton
        And I select value from insureAddress dropdown which includes 'Insuresupermarket.com'
        And I fill date field with '29'
        And I fill month field with '05'
        And I fill year field with '1998'
        And I click kindOfDrivenLicense
        And I click restrictionLast
        And I select '1' from currentLicenceYear dropdown
        And I wait for currentLicenceMonth to be visible
        And I select '5' from currentLicenceMonth dropdown
        And I click anyMedicalConditionsNo
        And I click anyOtherCarsNo
        And I click hasOffencesNo
        And I click anyConvictionsNo
        And I click hasInsuranceEverBeenDeclinedYes
        And I select '1' from yearsOfNoClaimsDiscount dropdown
        And I select value from startInsuranceDate dropdown which includes 'Today'
        And I click continueButton
        Then I should see aboutTheCar page
