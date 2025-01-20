class Cook {
 getZipCodeInput() {
  return cy.get('.hero-vertical-slider__text-column > .zip-form-cui > .input-button > .container-input > [data-testid="funnel-start-form-zipcode-input"]');
 }

getSearchBtn() {
   return cy.get('.hero-vertical-slider__text-column > .zip-form-cui > .input-button > .zip-btn-cui');
  }

 getSkipAllLink() {
    return cy.get('[data-testid="preferences-quiz-skip-all-button"]');
 }

getNumbersOfMealsBtn() {
   return cy.get('[data-testid="plan-select-6-toggle"]');
   ;
}

getContinueBtn() {
   return cy.get('[data-testid="plan-select-continue-button"]');
}

}
module.exports = new Cook();
