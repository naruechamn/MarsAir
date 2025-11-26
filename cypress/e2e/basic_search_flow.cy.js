import { SearchPage } from "../pages/SearchPage"
const searchPage = new SearchPage()

describe('Basic Search Flow', () => {
  const data = require('../fixtures/search_data.json')

  it('To verify the result of basic search when there are seats available', () => {
    searchPage.navigateToSearchPage()
    searchPage.selectDeparture(data.jul)
    searchPage.selectReturn(data.dec_next_two_years)
    searchPage.clickSearch()
    cy.get('#content')
      .should('contain', 'Search Results')
      .should('contain', 'Seats available!')
      .should('contain', 'Call now on 0800 MARSAIR to book!')
  })

  it('To verify the result of basic search when there are no seats available', () => {
    searchPage.navigateToSearchPage()
    searchPage.selectDeparture(data.jul)
    searchPage.selectReturn(data.dec_next_year)
    searchPage.clickSearch()
    cy.get('#content')
      .should('contain', 'Search Results')
      .should('contain', 'Sorry, there are no more seats available.')
  })
})