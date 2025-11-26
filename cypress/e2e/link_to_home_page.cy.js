import { SearchPage } from "../pages/SearchPage"
const searchPage = new SearchPage()

describe('Link To Home Page', () => {

    it('To verify clicking "Book a ticket to the red planet now!" link on the search results page', () => {
        searchPage.navigateToSearchPage()
        searchPage.clickSearch()
        cy.contains('Book a ticket to the red planet now!').click()
        cy.get('#content').should('contain', 'Welcome to MarsAir!')
    })

    it('To verify clicking MarsAir logo on the search results page', () => {
        searchPage.navigateToSearchPage()
        searchPage.clickSearch()
        cy.contains('MarsAir').click()
        cy.get('#content').should('contain', 'Welcome to MarsAir!')
    })
})