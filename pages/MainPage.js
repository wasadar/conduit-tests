class MainPage {
    visit() {
        cy.visit('https://demo.realworld.io/#/');
    }

    signInButton() {
        return cy.get('ul.navbar-nav li.nav-item a.nav-link').contains('Sign in');
    }

    signUpButton() {
        return cy.get('ul.navbar-nav li.nav-item a.nav-link').contains('Sign up');
    }

    homeButton() {
        return cy.get('a[ui-sref="app.home"]').contains('Home');
    }
      
    logoButton() {
        return cy.get('a.navbar-brand').contains('conduit');
    }

    githubButton() {
        return cy.contains('a', 'Fork on GitHub');
    }

    profileButton(name) {
        return cy.get('ul.navbar-nav li.nav-item a.nav-link').contains(name);
    }

    settingsButton() {
        return cy.get('ul.navbar-nav li.nav-item a.nav-link').contains('Settings');
    }
}

export default new MainPage();