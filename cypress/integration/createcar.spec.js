/* eslint-disable no-undef */
describe("Create Car Page", () => {
	beforeEach(() => {
		cy.visit("/create");
	});

	it('should contain the title "Create Car"', () => {
		cy.get("h3").contains("Create Car");
	});

	it('Should fill the create car form and click "Add Car"', () => {
		cy.get("#make").type("Ford");
		cy.get("#model").type("Puma");
		cy.get("#colour").type("Black");
		cy.get("#year").type(2009);
		cy.get("#addcar").click();
	});

	it("Should go back onClick Cancel button", () => {
		cy.get("#cancel").click();
	});
});
