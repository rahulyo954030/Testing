/// <reference types="cypress" />

describe("Counter Tests", function () {
  this.beforeEach(function () {
    cy.visit("https://example.cypress.io/todo#/active");
  });

  it("should show basic struture", function () {
    cy.get(".header").should("exist");
    cy.get(".new-todo").should("exist");
    cy.get(".filters").should("exist");
  });

  it.only("should be able to add todo", function () {
    cy.get(".todo-list").children().should("have.length", 2);
    cy.get(".new-todo").type("Automated tests{enter}");
    cy.get(".todo-list").children().should("have.length", 3);
  });

  it.only("should increse footer text", function () {
    cy.get(".todo-count strong").should("have.text", 2);
    cy.get(".new-todo").type("Automated tests{enter}");
    cy.get(".todo-count strong").should("have.text", 3);
  });
});
