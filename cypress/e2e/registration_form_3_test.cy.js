beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_3.html')
})

/*
BONUS TASK: add visual tests for registration form 3
Task list:
* Create test suite for visual tests for registration form 3 (describe block)
* Create tests to verify visual parts of the page:
    * radio buttons and its content
    * dropdown and dependencies between 2 dropdowns:
        * list of cities changes depending on the choice of country
        * if city is already chosen and country is updated, then city choice should be removed
    * checkboxes, their content and links
    * email format
 */

it('Verify radio buttons and its content', () => {
     // Array of found elements with given selector has 4 elements in total
     cy.get('input[type="radio"]').should('have.length', 4)

     // Verify labels of the radio buttons
     cy.get('input[type="radio"]').next().eq(0).should('have.text','Daily')
     cy.get('input[type="radio"]').next().eq(1).should('have.text','Weekly')
     cy.get('input[type="radio"]').next().eq(2).should('have.text','Monthly')
     cy.get('input[type="radio"]').next().eq(3).should('have.text','Never')
     
});
     Cypress.on('uncaught:exception', (err, runnable) => {
        if(err.message.includes('angular is not defined') || err.message.includes('$ is not defined')) {
            return false;
        }
 });

 it('Verify checkboxes, their content and link', () => {
    cy.get('input[type="checkbox"]').should('have.length', 2)
    cy.get('input[type="checkbox"]').eq(0).check().should('be.checked')
    cy.get('input[type="checkbox"]').eq(1).check().should('be.checked')
    cy.get('a[href="cookiePolicy.html"]').should('exist').click();
    cy.url().should('include', 'cookiePolicy.html');
 });

 it('Check e-mail format', () => {
    cy.get('input[name="email"]').type('test@example.com')
    cy.get('input[name="email"]').invoke('val').then(emailValue => {
        expect(emailValue).to.match(/[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$/);
    });
});
/*
BONUS TASK: add functional tests for registration form 3
Task list:
* Create second test suite for functional tests
* Create tests to verify logic of the page:
    * all fields are filled in + corresponding assertions
    * only mandatory fields are filled in + corresponding assertions
    * mandatory fields are absent + corresponding assertions (try using function)
    * add file functionlity(google yourself for solution!)
 */

import { faker } from '@faker-js/faker';

describe('Form Filling Test', () => {
  it('All fields are filled in', () => {
    const randomName = faker.person.firstName();
    const randomEmail = faker.internet.email();
    cy.get('input[id="name"]').type(randomName);
    cy.get('input[name="email"]').type(randomEmail);
  });
});