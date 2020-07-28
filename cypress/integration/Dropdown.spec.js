describe('Dropdown', () => {
  describe('Basic', () => {
    beforeEach(() => {
      cy.visit('/Dropdown?example=1')
      cy.get('.doc-example-body > .so-dropdown').as('dropdown')
    })

    it('should expand/collapse while click root button', () => {
      cy.get('@dropdown')
        .get('.so-hidable-show')
        .should('not.exist')
      cy.get('@dropdown')
        .contains('Dropdown')
        .click()
      cy.get('@dropdown')
        .get('.so-hidable-show')
        .should('exist')
      cy.get('@dropdown')
        .contains('Dropdown')
        .click()
      cy.get('@dropdown')
        .get('.so-hidable-show')
        .should('not.exist')
    })

    it('should expand sub-menu while click item', () => {
      cy.get('@dropdown')
        .contains('Dropdown')
        .click()
      cy.contains('Link to Google')
        .parent()
        .should('not.has.class', 'so-hidable-show')
      cy.get('@dropdown')
        .contains('Submenu')
        .click()
      cy.contains('Link to Google')
        .parent()
        .should('has.class', 'so-hidable-show')
    })

    it('should hide while click item', () => {
      cy.get('@dropdown')
        .contains('Dropdown')
        .click()
      cy.get('@dropdown')
        .get('.so-hidable-show')
        .should('exist')
      cy.get('@dropdown')
        .contains('Message')
        .click()
      cy.get('@dropdown')
        .get('.so-hidable-show')
        .should('not.exist')
    })

    it('should not hide while click submenu', () => {
      cy.get('@dropdown')
        .contains('Dropdown')
        .click()
      cy.get('@dropdown')
        .get('.so-hidable-show')
        .should('exist')
      cy.get('@dropdown')
        .contains('Submenu')
        .click()
      cy.get('@dropdown')
        .get('.so-hidable-show')
        .should('exist')
    })
  })

  describe('Hover', () => {
    beforeEach(() => {
      cy.visit('/Dropdown?example=2')
      cy.get('.doc-example-body > .so-dropdown').as('dropdown')
    })

    it('shoule expand/collapse while hover root button ', () => {
      cy.get('@dropdown')
        .get('.so-hidable-show')
        .should('not.exist')
      cy.get('@dropdown')
        .contains('Hover')
        .trigger('mouseover')
      cy.get('@dropdown')
        .get('.so-hidable-show')
        .should('exist')
      cy.get('@dropdown')
        .contains('Hover')
        .click()
      cy.get('@dropdown')
        .get('.so-hidable-show')
        .should('not.exist')
    })

    it('should expand submenus while hover submenu', () => {
      cy.get('@dropdown')
        .contains('Hover')
        .trigger('mouseover')
      cy.get('@dropdown')
        .contains('optic 1')
        .parent()
        .should('not.has.class', 'so-hidable-show')
      cy.get('@dropdown')
        .contains('First')
        .trigger('mouseover')
      cy.get('@dropdown')
        .contains('optic 1')
        .parent()
        .should('has.class', 'so-hidable-show')
    })
  })

  describe('Position', () => {
    beforeEach(() => {
      cy.visit('/Dropdown?example=3')
    })

    it('should hava correct position className', () => {
      cy.get('.doc-example-body > div > .so-dropdown').each((el, index) => {
        if (index >= 8) return
        const position = el.get(0).classList[1]
        const text = position
          .slice(12)
          .split('-')
          .map(k => k[0].toUpperCase() + k.slice(1))
          .join(' ')
        cy.wrap(el)
          .contains(text)
          .click()
        cy.wrap(el)
          .contains(text)
          .click()
      })
    })
  })

  describe('Absolute', () => {
    beforeEach(() => {
      cy.visit('/Dropdown?example=7')
    })

    it.only('should render options under body', () => {
      cy.get('.doc-example-body > div > .so-dropdown')
        .first()
        .as('dropdown')

      cy.get('@dropdown')
        .contains('Absolute')
        .click()

      cy.get('@dropdown')
        .get('.so-list')
        .should('not.exist')
      cy.get('body > .so-list-root > .so-list-absolute-wrapper > .so-list').should('has.class', 'so-hidable-show')
    })
  })
})
