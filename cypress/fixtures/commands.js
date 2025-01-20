    Cypress.Commands.add('verifyCardsCount', (selector, minimumCount) => {
       cy.get(selector)
       .should('exist') 
       .its('length')
       .should('be.gte', minimumCount); 
    });
