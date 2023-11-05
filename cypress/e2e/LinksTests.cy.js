import MainPage from '../../pages/MainPage'

describe('Links tests', () => {
  it('Logo', () => {
    MainPage.visit();
    MainPage.logoButton().click();
    cy.url().should('eq', 'https://demo.realworld.io/#/');
  });

  it('Home', () => {
    MainPage.visit();
    MainPage.homeButton().click();
    cy.url().should('eq', 'https://demo.realworld.io/#/');
  });

  it('Sign in', () => {
    MainPage.visit();
    MainPage.signInButton().click();
    cy.url().should('eq', 'https://demo.realworld.io/#/login');
  });

  it('Sign up', () => {
    MainPage.visit();
    MainPage.signUpButton().click();
    cy.url().should('eq', 'https://demo.realworld.io/#/register');
  });

  it('Github', () => {
    MainPage.visit();
    MainPage.githubButton().should('have.attr', 'href').and('include', 'https://github.com/');
  });
});