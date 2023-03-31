export {}

describe('Проверка конструктора бургеров', function() {
  before(function() {
    cy.intercept('GET', 'api/auth/user', { fixture: 'user.json' }).as('getUser')
    cy.intercept('POST', 'api/orders', { fixture: 'order.json' }).as('postOrder')
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

  it('Drag and drop работате корректно', function() {
    cy.get('li[draggable="true"]').first().trigger('dragstart');
    cy.get('div[class^=burger-constructor_wrapper]').first().trigger('drop', { force: true })
    cy.get('ul li div').should('exist');
  })
})
