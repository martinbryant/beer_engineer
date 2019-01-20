describe("Search function tests", () => {
    beforeEach(() => {
        cy.visit("/search");
    });
    it("search bar should be blank on start", () => {
        cy.get("#search").should("have.value", "");
    });
    it("should be blank when filled in, left page and return", () => {
        cy.get("#search").type("beer");
        cy.visit("/favourites");
        cy.visit("/search");
        cy.get("#search").should("have.value", "");
    });
    it("should show 5 random button by default", () => {
        cy.get("button[name=random-button]").contains("5");
    });
    it("changes button to 10 random when 10 radio button clicked", () => {
        cy.get("input[value=10]").click();
        cy.get("button[name=random-button]").contains("10");
    });
    it("changes butoon to 5 random when radio button clicked", () => {
        cy.get("input[value=10]").click();
        cy.get("input[value=5]").click();
        cy.get("button[name=random-button]").contains("5");
    });
});
