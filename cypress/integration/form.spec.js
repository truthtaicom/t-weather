describe('Form', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('accepts input', () => {
    const input = "Ho Chi Minh city"
    cy.get('.ant-input')
      .type(input)
      .wait(1000)
      .should('have.value', input)
  })

  it('displays list of card', () => {
    const input = "Ho Chi Minh city"
    cy.get('.ant-input')
      .type(input)
      .wait(1000)
      .get('.ant-card')
      .should('have.length', 6)
  })
})