class CookLogin {

getSearchSuggestions() {
   return cy.get('ul.ui-autocomplete[id^="ui-id-"]');
}

getLoginLink(){
   return cy.get('[data-testid="login"]');
   ;
}

getLoginAccountLink(){
   return cy.get('[data-testid="login-form"]')
   ;
}


getEmailInput(){
   return cy.get('[data-testid="email"]');
}

getPassworInput(){
   return cy.get('[data-testid="password"]');
}

getLoginBtn(){
   cy.get('[data-testid="submit-form"]')
}

}
module.exports = new CookLogin();
