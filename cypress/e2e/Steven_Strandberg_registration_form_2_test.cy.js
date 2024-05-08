beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_2.html')
})
/*
Assignement 4: add content to the following tests
*/

describe('Section 1: Functional tests', () => {

    it('User can use only same both first and validation passwords', ()=>{
        cy.get('#username').type('StevenS')
        cy.get('#email').type('steven@steven.com')
        cy.get('input[name="name"]').type('Steven')
        cy.get('input[name="lastName"]').type('Strandberg')
        cy.get('[data-testid="phoneNumberTestId"]').type('5118303')
        cy.get('input[name="password"]').type('steven555')
        cy.get('[name="confirm"]').type('steven555')
        cy.get('h2').contains('Password').click()
        cy.get('#password_error_message').should('not.be.visible')
        cy.get('.submit_button').should('be.enabled')
        cy.get('.submit_button').click()
    })
    
    it('User can submit form with all fields added', ()=>{
        cy.get('#username').type('StevenS')
        cy.get('#email').type('steven@steven.com')
        cy.get('input[name="name"]').type('Steven')
        cy.get('input[name="lastName"]').type('Strandberg')
        cy.get('[data-testid="phoneNumberTestId"]').type('5118303')
        cy.get('[type="radio"]').check('CSS')
        cy.get('[type="checkbox"]').first().check()
        cy.get('select[name="cars"]')
        .select(['Opel'])
        cy.get('select[name="animal"]')
        .select(['Snake'])
        cy.get('input[name="password"]').type('steven555')
        cy.get('[name="confirm"]').type('steven555')
        cy.get('h2').contains('Password').click()
        cy.get('#password_error_message').should('not.be.visible')
        cy.get('.submit_button').should('be.enabled')
        cy.get('.submit_button').click()
    })

    it('User can submit form with valid data and only mandatory fields added', ()=>{
        cy.get('#username').type('StevenS')
        cy.get('#email').type('steven@steven.com')
        cy.get('input[name="name"]').type('Steven')
        cy.get('input[name="lastName"]').type('Strandberg')
        cy.get('[data-testid="phoneNumberTestId"]').type('5118303')
        cy.get('input[name="password"]').type('steven555')
        cy.get('[name="confirm"]').type('steven555')
        cy.get('h2').contains('Password').click()
        cy.get('#password_error_message').should('not.be.visible')
        cy.get('.submit_button').should('be.enabled')
        cy.get('.submit_button').click()
    })

    it('Verify that the submit button is not enabled when Last Name field is not present', () => {
        cy.get('#username').type('StevenS')
        cy.get('#email').type('steven@steven.com')
        cy.get('input[name="name"]').type('Steven')
        cy.get('input[name="lastName"]').clear()
        cy.get('[data-testid="phoneNumberTestId"]').type('5118303')
        cy.get('input[name="password"]').type('steven555')
        cy.get('[name="confirm"]').type('steven555')
        cy.get('.submit_button').should('be.disabled')
    });
    })

/*
Assignement 5: create more visual tests
*/

describe('Section 2: Visual tests', () => {
    it('Check that logo is correct and has correct size', () => {
        cy.log('Will check logo source and size')
        cy.get('img').should('have.attr', 'src').should('include', 'cerebrum_hub_logo')
        cy.get('img').invoke('height').should('be.lessThan', 178)
            .and('be.greaterThan', 100)   
});
    
    it('My test for second picture', () => {
        cy.log('Will check logo source and size')
        cy.get('[data-cy="cypress_logo"]').should('have.attr', 'src').should('include', 'cypress_logo')
        cy.get('[data-cy="cypress_logo"]').invoke('height').should('be.lessThan', 178)
            .and('be.greaterThan', 87)   
    });

    it('Check navigation part', () => {
        cy.get('nav').children().should('have.length', 2)
        cy.get('nav').siblings('h1').should('have.text', 'Registration form number 2')
        cy.get('nav').children().eq(0).should('be.visible')
            .and('have.attr', 'href', 'registration_form_1.html')
            .click()
        cy.url().should('contain', '/registration_form_1.html')
        cy.go('back')
        cy.log('Back again in registration form 2')
        cy.get('nav').children().eq(0).should('be.visible')
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('angular is not defined') || err.message.includes('$ is not defined')) {
        return false;
    }

});
    it('Check navigation part', () => {
        cy.get('nav').children().should('have.length', 2)
        cy.get('nav').siblings('h1').should('have.text', 'Registration form number 2')
        cy.get('nav').children().eq(1).should('be.visible')
        .and('have.attr', 'href', 'registration_form_3.html')
        .click()
        cy.url().should('contain', '/registration_form_3.html')
        cy.go('back')
        cy.log('Back again in registration form 2')
        cy.get('nav').children().eq(1).should('be.visible')
});

    it('Check that radio button list is correct', () => {
        cy.get('input[type="radio"]').should('have.length', 4)
        cy.get('input[type="radio"]').next().eq(0).should('have.text','HTML')
        cy.get('input[type="radio"]').next().eq(1).should('have.text','CSS')
        cy.get('input[type="radio"]').next().eq(2).should('have.text','JavaScript')
        cy.get('input[type="radio"]').next().eq(3).should('have.text','PHP')
        cy.get('input[type="radio"]').eq(0).should('not.be.checked')
        cy.get('input[type="radio"]').eq(1).should('not.be.checked')
        cy.get('input[type="radio"]').eq(2).should('not.be.checked')
        cy.get('input[type="radio"]').eq(3).should('not.be.checked')
        cy.get('input[type="radio"]').eq(0).check().should('be.checked')
        cy.get('input[type="radio"]').eq(1).check().should('be.checked')
        cy.get('input[type="radio"]').eq(0).should('not.be.checked')
    })

    it('Check that the list of checkboxes is correct', () => {
        cy.get('input[type="checkbox"]').should('have.length', 3)
        cy.get('input[type="checkbox"]').next().eq(0).should('have.text','I have a bike')
        cy.get('input[type="checkbox"]').next().eq(1).should('have.text','I have a car')
        cy.get('input[type="checkbox"]').next().eq(2).should('have.text','I have a boat')
        cy.get('input[type="checkbox"]').eq(0).check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(1).should('not.be.checked')
        cy.get('input[type="checkbox"]').eq(2).should('not.be.checked')
        cy.get('input[type="checkbox"]').eq(2).should('not.be.checked')
        cy.get('input[type="checkbox"]').eq(1).check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(0).check().should('be.checked')

    });

    it('Car dropdown is correct', () => {
        cy.get('#cars').select(1).screenshot('Cars drop-down')
        cy.screenshot('Full page screenshot')
        cy.get('#cars').children().should('have.length', 4)
        cy.get('#cars').find('option').should('have.length', 4)
        cy.get('#cars').find('option').eq(0).should('have.text', 'Volvo')
        cy.get('#cars').find('option').then(options => {
            const actual = [...options].map(option => option.value)
            expect(actual).to.deep.eq(['volvo', 'saab', 'opel', 'audi'])
        })
    })

    it('Check that the dropdown of favorite animals is correct', () => {
        cy.get('#animal').select(1).screenshot('animal drop-down')
        cy.screenshot('Full page screenshot')
        cy.get('#animal').children().should('have.length', 6)
        cy.get('#animal').find('option').should('have.length', 6)
        cy.get('#animal').find('option').eq(0).should('have.text', 'Dog')
        cy.get('#animal').find('option').eq(1).should('have.text', 'Cat')
        cy.get('#animal').find('option').eq(2).should('have.text', 'Snake')
        cy.get('#animal').find('option').eq(3).should('have.text', 'Hippo')
        cy.get('#animal').find('option').eq(4).should('have.text', 'Cow')
        cy.get('#animal').find('option').eq(5).should('have.text', 'Horse')

});

})

import { faker } from '@faker-js/faker';

/*
//Testin variables with faker js
*/
describe('Form Filling Test', () => {
  it('All fields are filled in with faker', () => {
    const userName = faker.internet.userName();
    const randomEmail = faker.internet.email();
    const randomName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const phoneNumber = faker.datatype.number({ min: 1000000000, max: 9999999999 });
    const password = faker.internet.password();
    cy.get('input[id="username"]').type(userName)
    cy.get('input[id="email"]').type(randomEmail);
    cy.get('input[data-cy="name"]').type(randomName);
    cy.get('input[data-testid="lastNameTestId"]').type(lastName);
    cy.get('input[data-testid="phoneNumberTestId"]').type(phoneNumber.toString());
    cy.get('input[id="password"]').type(password);
    cy.get('input[id="confirm"]').type(password);
  });
});

function inputValidData(username) {
    cy.log('Username will be filled')
    cy.get('input[data-testid="user"]').type(username)
    cy.get('#email').type('validemail@yeap.com')
    cy.get('[data-cy="name"]').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('[data-testid="phoneNumberTestId"]').type('10203040')
    cy.get('#password').type('MyPass')
    cy.get('#confirm').type('MyPass')
    cy.get('h2').contains('Password').click()
}