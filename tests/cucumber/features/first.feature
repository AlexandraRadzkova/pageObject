Feature: If continue button on the car insurance form page works well
  Check if continue button navigates user to associated page

  Scenario: Fill car insurance form and click continue button
    Given home page
    When I click carInsuranceButton
    And I click getNewQuoteButton
    And I should see carInsuranceForm page
    And I fill carRegistrationYear field with '1753'
    And I fill address field with 'Insure, 384, Clapham Road, London, SW99AR'
    And I fill dateField field with '29'
    And I fill monthField field with '05'
    And I fill yearField field with '1998'
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
