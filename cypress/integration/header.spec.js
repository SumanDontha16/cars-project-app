/* eslint-disable no-undef */
describe("Create Car Page", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it('should contain the title "Cars Inventory"', () => {
		cy.get("h4").contains("Cars Inventory");
	});
});
