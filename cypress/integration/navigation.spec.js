describe("Navigation tests", () => {
    it("on navigation to home it redirects to /search", () => {
        cy.visit("/");
        cy.url().should("include", "/search");
    });
    it("click on favourite tab should navigate to /favourites", () => {
        cy.visit("/search");
        cy.contains("Favourites").click();
        cy.url().should("include", "/favourites");
    });
    it("click on search tab should navigate to /search", () => {
        cy.visit("/favourites");
        cy.contains("Search").click();
        cy.url().should("include", "/search");
    });
});
