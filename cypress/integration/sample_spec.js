/// <reference types="Cypress" />

before(function () {
    cy.fixture('admin_account.json').as('admin')
})

describe('My First Test', function () {
    it('Login successfuly', function () {
        // Step 1: Visit a page
        cy.visit('http://testapp.galenframework.com/');
        // Step 2: Query for an element
        cy.contains('Login').click();
        // expect(cy.focused()).to.not.equal('Username');
        // Input email
        cy.get('[name="login.username"]')
            .focus()
            .type(this.admin.email);
        // Input password 
        cy.get('[name="login.password"]')
            .focus()
            .type(this.admin.password);
        // Click on Login
        cy.get('button').contains('Login').click();

        // Assert login successfully
        cy.get('#menu');
    })

    it('Adding a note successfully', function () {
        const noteTitle = 'This is note title';
        const noteDescription = 'note description';
        cy.contains('Add note').click();
        cy.get('[name="note.title"]')
            .type(noteTitle);
        cy.get('[name="note.description"]')
            .type(noteDescription);
        cy.get('button').contains('Add Note').click();

        cy.get('.list-group')
            .find('.list-group-item')
            .last()
            .within(() => {
                cy.get('.list-group-item-heading').should('have.text', noteTitle)
                cy.get('.list-group-item-text').should('have.text', noteDescription)
            })
    })
})