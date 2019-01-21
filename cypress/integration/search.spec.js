describe("Search Page tests", () => {
    beforeEach(() => {
        cy.visit("/search");
    });
    describe("search bar", () => {
        it("should be blank on start", () => {
            cy.get("#search").should("have.value", "");
        });
        it("blank when filled in, left page and return", () => {
            cy.get("#search").type("beer");
            cy.visit("/favourites");
            cy.visit("/search");
            cy.get("#search").should("have.value", "");
        });
        it("show no search validation error on start", () => {
            cy.get("#search-helper-text").should("not.exist");
        });
        it("show validation error unless only alpha numeric characters, dash or space in search form", () => {
            cy.get("#search").type("beer#");
            cy.get("#search-helper-text")
                .contains("Alpha Numeric characters only")
                .should("have.class", "MuiFormHelperText-error-292");
        });
        it("remove validation error when text corrected", () => {
            cy.get("#search")
                .type("beer#")
                .type("{backspace}");
            cy.get("#search-helper-text").should("not.exist");
        });
    });
    describe("search button", () => {
        it("disabled on load as search form is empty", () => {
            cy.get("button[name=search-button]").should("be.disabled");
        });
        it("disabled if search validation error", () => {
            cy.get("#search").type("#");
            cy.get("button[name=search-button]").should("be.disabled");
        });
        it("active if search term valid", () => {
            cy.get("#search").type("beer");
            cy.get("button[name=search-button]").should("not.be.disabled");
        });
    });
    describe("random button", () => {
        it("show 5 random button by default", () => {
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
});
