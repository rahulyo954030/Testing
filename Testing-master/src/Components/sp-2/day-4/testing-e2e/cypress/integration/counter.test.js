/// <reference types="cypress" />

describe("Counter Tests", function (){
    beforeEach(function(){
        cy.visit("http://localhost:3000/");
    })

    it.only("basic", function (){

        cy.intercept("GET", "http://localhost:8080/counter",{
            value: "hello world"
        }).as("counterReq")

        // cy.intercept("POST", "http://localhost:8080/counter", {
        //     value: 1,
        // }).as("counterReq");

        cy.get(".counterBtn").click();

        cy.wait("@counterReq");

        cy.get(".counter-value").should("have.text", "count is: hello world")
    })

    // it("Button should exist ", function (){
        
    //     cy.get(".counterBtn").should("exist"); // should -> expect
    //     cy.get(".doesnotexist").should("not.exist")
    //     // cy.get("#root").should("exist")
    //     // expect(1).to.be.eq(1) 
    // });

    // it("should increment counter", function () {

    //     cy.get(".counterBtn").should("have.text", "count is: 0");
    //     cy.get(".counterBtn").click();
    //     cy.get(".counterBtn").should("have.text", "count is: 1")
    // })

    // it("should increment counter multiple times", function () {

    //     cy.get(".counterBtn").should("have.text", "count is: 0");
    //     cy.get(".counterBtn").click();
    //     cy.get(".counterBtn").click();
    //     cy.get(".counterBtn").click();
    //     cy.get(".counterBtn").click();
    //     cy.get(".counterBtn").should("have.text", "count is: 4")
    // })   

    // it.only("should have blue color", function (){
    //     cy.get("h2").should("have.css", { color: "blue"})
    // })
})