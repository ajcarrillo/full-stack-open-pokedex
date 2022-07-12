describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:5000")
    cy.contains("ivysaur")
    cy.contains("Pokémon and Pokémon character names are trademarks of Nintendo.")
  })

  it("specific pages can be opened", function () {
    cy.visit("http://localhost:5000")
    cy.get("a[href*=\"/pokemon/venusaur\"]").click()
    cy.contains("overgrow")
    cy.contains("chlorophyll")

    cy.visit("http://localhost:5000")
    cy.get("a[href*=\"/pokemon/charmander\"]").click()
    cy.contains("blaze")
    cy.contains("solar power")
  })
})