class SettingsPage {
    visit() {
        cy.visit('https://demo.realworld.io/#/settings');
    }

    inputName(name) {
        cy.get('input[placeholder="Username"]').clear();
        cy.get('input[placeholder="Username"]').type(name);
    }

    inputBio(bio) {
        cy.get('textarea[placeholder="Short bio about you"]').clear();
        cy.get('textarea[placeholder="Short bio about you"]').type(bio);
    }

    inputMail(mail) {
        cy.get('input[placeholder="Email"]').clear();
        cy.get('input[placeholder="Email"]').type(mail);
    }

    inputPassword(password) {
        cy.get('input[placeholder="New Password"]').clear();
        cy.get('input[placeholder="New Password"]').type(password);
    }

    submit() {
        cy.get('button.btn-primary').click();
    }

    logout() {
        cy.get('button.btn-outline-danger').click();
    }
}

export default new SettingsPage();