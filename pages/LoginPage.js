class LoginPage {
    visit() {
        cy.visit('https://demo.realworld.io/#/login');
    }

    inputMail(mail) {
        cy.get('input[placeholder="Email"]').clear();
        cy.get('input[placeholder="Email"]').type(mail);
    }

    inputPassword(password) {
        cy.get('input[placeholder="Password"]').clear();
        cy.get('input[placeholder="Password"]').type(password);
    }

    errorMessage() {
        return cy.get('div.ng-scope li.ng-binding').contains('email or password is invalid');
    }

    submit() {
        cy.get('button.btn-primary').click();
    }
}

export default new LoginPage();