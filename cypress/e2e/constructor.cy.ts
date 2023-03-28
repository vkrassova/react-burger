describe('Проверка конструктора бургеров', function() {
  before(function() {
    cy.visit('http://localhost:3000')
  });
  it('Drag and drop работате корректно', function() {

    cy.get('li[draggable="true"]').first().trigger('dragstart');
    cy.get('div[class^=burger-constructor_wrapper]').first().trigger('drop', { force: true })
    cy.get('ul li div').should('exist');
  });
})