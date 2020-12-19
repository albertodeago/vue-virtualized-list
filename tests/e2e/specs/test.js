// https://docs.cypress.io/api/introduction/api.html

describe("vue-virtualized-list", () => {
  it("open the app root url", () => {
    cy.visit("/")
    cy.title().should("eq", "vue-virtualized-list")
  })

  it("should render the component two containers", () => {
    cy.visit("/")
    cy.get("#app")
      .get(".vue-virtualized-list").should("exist")
      .get(".vue-virtualized-list__scroll").should("exist")
  })

  it("should render just the items needed", () => {
    cy.visit("/")
    cy.get("#app")
      .get(".item").should("have.length", 25)
  })

  it("should render just the items needed after scroll", () => {
    cy.visit("/")
    cy.get(".vue-virtualized-list__scroll")
      .scrollTo(0, 1000)
      .wait(250)
      .get(".item").should("have.length", 30)
  })

  it("should render the right items at the beginning", () => {
    cy.visit("/")
    cy.get(".item:first").contains("static text - content-0")
    cy.get(".item:nth(20)").contains("static text - content-20")
  })

  it("should render the right items after scroll", () => {
    cy.visit("/")
    cy.get(".vue-virtualized-list__scroll")
      .scrollTo(0, 1000)
      .wait(250)
      .get(".item:first").contains("static text - content-35")
      .get(".item:nth(25)").contains("static text - content-60")
  })

  it("should render 5 elements as bench before the first and after the last visible ones", () => {
    cy.visit("/")
    cy.get(".vue-virtualized-list__scroll")
      .scrollTo(0, 1000)
      .wait(250)
      .get(".item:first").should("not.be.visible")
      .get(".item:last").should("not.be.visible")
      .get(".item:nth(4)").should("not.be.visible")
      .get(".item:nth(5)").should("be.visible")
      .get(".item:nth(-4)").should("not.be.visible")
      .get(".item:nth(-6)").should("be.visible")
  })

  it.only("should render the specified amount of item as bench", () => {
    cy.visit("/")
    cy.get(".vue-virtualized-list__scroll")
      .scrollTo(0, 1000)
      .get(".item").should("have.length", 30)
    cy.get("#bench")
      .type("{backspace}10")
    cy.get(".vue-virtualized-list__scroll")
    .get(".item").should("have.length", 40)
  })
})
