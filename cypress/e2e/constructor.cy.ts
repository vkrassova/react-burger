export {}

describe('Проверка конструктора бургеров', function() {
  before(function() {
    cy.intercept('GET', 'api/auth/user', { fixture: 'user.json' })
    cy.intercept('POST', 'api/orders', { fixture: 'order.json' }).as('postOrder')
    cy.intercept('GET', '/api/ingredients', { fixture: 'ingredients.json' }).as('getIngredients')
    cy.visit('http://localhost:3000')

    window.localStorage.setItem(
      "refreshToken",
      JSON.stringify("test-refreshToken")
    );
    window.localStorage.setItem(
      "accessToken",
      JSON.stringify("test-accessToken")
    )
  })

  it('Проверка Drag and drop и оформления заказа', function() {
    cy.wait('@getIngredients').then(() => {
      cy.get('[class^="burger-ingredients_item"]').each((element: string) => {
        cy.get(element).trigger('dragstart')
        cy.get('div[class^=burger-constructor_wrapper]').first().trigger('drop', { force: true })
        cy.get('ul li div').should('exist')
      })
    })

    cy.get('[class^="burger-constructor_sum"]').find('button')
      .should('not.be.disabled').click()

    cy.wait('@postOrder').then(() => {
      cy.get('[class^="order-details_orderCount"]').should('exist')
      cy.get('[class^="modal_popup"]').find('[class^="modal_close"]').click()
      cy.get('[class^="modal_popup"]').should('not.exist')
    })
  })
})
