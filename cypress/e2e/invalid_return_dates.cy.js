import { SearchPage } from "../pages/SearchPage"
const searchPage = new SearchPage()

describe('Invalid Return Dates', () => {
    const data = require('../fixtures/search_data.json')
    
    it('To verify the result of search with invalid return date when the return date is less than 1 year from the departure date', () => {
        searchPage.navigateToSearchPage()
        searchPage.selectDeparture(data.jul)
        searchPage.selectReturn(data.dec)
        searchPage.clickSearch()
        cy.get('#content')
            .should('contain', 'Search Results')
            .should('contain', 'Unfortunately, this schedule is not possible. Please try again.')
    })

    it('To verify the result of search with valid return date when the return date is equal to 1 year from the departure date', () => {
        searchPage.navigateToSearchPage()
        searchPage.selectDeparture(data.jul)
        searchPage.selectReturn(data.jul_next_year)
        searchPage.clickSearch()
        cy.get('#content')
            .should('contain', 'Search Results')
            .should('not.contain', 'Unfortunately, this schedule is not possible. Please try again.')
    })

    it('To verify the result of search with valid return date when the return date is more than 1 year from the departure date', () => {
        searchPage.navigateToSearchPage()
        searchPage.selectDeparture(data.jul)
        searchPage.selectReturn(data.dec_next_two_years)
        searchPage.clickSearch()
        cy.get('#content')
            .should('contain', 'Search Results')
            .should('not.contain', 'Unfortunately, this schedule is not possible. Please try again.')
    })

    it('To verify the result of search with invalid return date when the return date is equal to the departure date', () => {
        searchPage.navigateToSearchPage()
        searchPage.selectDeparture(data.jul)
        searchPage.selectReturn(data.jul)
        searchPage.clickSearch()
        cy.get('#content')
            .should('contain', 'Search Results')
            .should('contain', 'Unfortunately, this schedule is not possible. Please try again.')
    })

    it('To verify the result of search with invalid return date when the return date is less than the departure date', () => {
        searchPage.navigateToSearchPage()
        searchPage.selectDeparture(data.dec)
        searchPage.selectReturn(data.jul)
        searchPage.clickSearch()
        cy.get('#content')
            .should('contain', 'Search Results')
            .should('contain', 'Unfortunately, this schedule is not possible. Please try again.')
    })
})