describe("Navigation tests", () => {
    it("on navigation to home it redirects to /search", () => {
        cy.visit("http://localhost:3000/beer-engineer");
        cy.url().should("include", "/search");
    });
    it("click on favourite tab should navigate to /favourites", () => {
        cy.visit("http://localhost:3000/beer-engineer/search");
        cy.contains("Favourites").click();
        cy.url().should("include", "/favourites");
    });
    it("click on search tab should navigate to /search", () => {
        cy.visit("http://localhost:3000/beer-engineer/favourites");
        cy.contains("Search").click();
        cy.url().should("include", "/search");
    });
});
