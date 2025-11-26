export class SearchPage {
    weblocators = {
        departure: '#departing',
        return: '#returning',
        promotional_code: '#promotional_code',
        search: 'Search',
        back: 'Back'
    }

    navigateToSearchPage() {
        cy.visit('/NaruechaM')
    }

    selectDeparture(option) {
        cy.get(this.weblocators.departure).select(option)
    }

    selectReturn(option) {
        cy.get(this.weblocators.return).select(option)
    }

    enterPromotionalCode(promotional_code) {
        cy.get(this.weblocators.promotional_code).type(promotional_code)
    }

    clickSearch() {
        cy.contains(this.weblocators.search).click()
    }

    clickBack(){
        cy.contains(this.weblocators.back).click()
    }
}