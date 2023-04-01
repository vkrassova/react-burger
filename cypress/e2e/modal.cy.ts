export {}

describe('Проверка конструктора бургеров', function() {
  before(function() {
    cy.intercept('GET', '/api/ingredients', { fixture: 'ingredients.json' }).as('getIngredients')
    cy.visit('http://localhost:3000')
  })

  it('Проверка открытия модального окна ингредиента', () => {
    cy.wait('@getIngredients').then(() => {
      cy.get('[class^="burger-ingredients_item"]').each((element: any) => {
        cy.get(element).find('[class^="ingredients-link"]').click()

        cy.get('[class^="ingredient-details_content"]')
          .find('[class^="ingredient-details_list"]').should('exist')

        cy.get('[class^="modal_popup"]').find('[class^="modal_closeBtn"]').click()

        cy.get('[class^="modal_popup"]').should('not.exist')
      })
    })
  })
})
