# MarsAir

Test Document: https://docs.google.com/spreadsheets/d/1LorZqFgha058GzRzxJWZFW78yygGBIXgHdJ3CxJrNVk/edit?usp=sharing

## Installation

Clone the project repository

```zsh
git clone https://github.com/naruechamn/MarsAir.git
```

Install dependencies

```zsh
npm install
```

Open Cypress Test Runner

```zsh
npx cypress open
```

## Run tests

Run all test specs

```zsh
npx cypress run
```

Run specific test specs

```zsh
npx cypress run --spec "cypress/e2e/basic_search_flow.cy.js"
npx cypress run --spec "cypress/e2e/invalid_return_dates.cy.js"
npx cypress run --spec "cypress/e2e/link_to_home_page.cy.js"
npx cypress run --spec "cypress/e2e/promotional_codes.cy.js"
```