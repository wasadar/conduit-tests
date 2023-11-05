import LoginPage from '../../pages/LoginPage';
import SettingsPage from '../../pages/SettingsPage';
import MainPage from '../../pages/MainPage'

describe('Account tests', () => {
  let mail = "nohaga2564@rdluxe.com";
  let name = "nohaga2564";
  let pass = "nohaga2564";

  it('Login', () => {
    LoginPage.visit();
    LoginPage.inputMail(mail);
    LoginPage.inputPassword(pass);
    LoginPage.submit();

    MainPage.profileButton(name).should('be.visible');
  });

  it('Logout', () => {
    LoginPage.visit();
    LoginPage.inputMail(mail);
    LoginPage.inputPassword(pass);
    LoginPage.submit();
    MainPage.settingsButton().click();
    SettingsPage.logout();

    MainPage.signInButton().should('be.visible');
    MainPage.signUpButton().should('be.visible');
  });

  it('Change name', () => {
    LoginPage.visit();
    LoginPage.inputMail(mail);
    LoginPage.inputPassword(pass);
    LoginPage.submit();
    MainPage.settingsButton().click();
    SettingsPage.inputName("New name");
    SettingsPage.submit();
    cy.url().should('include', 'https://demo.realworld.io/#/@');
  });

  after(() => {
    LoginPage.visit();
    MainPage.settingsButton().click();
    SettingsPage.inputName("nohaga2564");
    SettingsPage.submit();
    cy.wait(1000);
  });

  it('Change mail', () => {
    LoginPage.visit();
    LoginPage.inputMail(mail);
    LoginPage.inputPassword(pass);
    LoginPage.submit();
    MainPage.settingsButton().click();
    let newMail = "new.mail@mail.com";
    SettingsPage.inputMail(newMail);
    SettingsPage.submit();
    cy.url().should('include', 'https://demo.realworld.io/#/@');
    mail = newMail;
  });

  after(() => {
    LoginPage.visit();
    MainPage.settingsButton().click();
    SettingsPage.inputMail("nohaga2564@rdluxe.com");
    SettingsPage.submit();
    cy.wait(1000);
  });

  it('Change password', () => {
    LoginPage.visit();
    LoginPage.inputMail(mail);
    LoginPage.inputPassword(pass);
    LoginPage.submit();
    MainPage.settingsButton().click();
    let newPass = "pass";
    SettingsPage.inputPassword(newPass);
    SettingsPage.submit();
    cy.url().should('include', 'https://demo.realworld.io/#/@');
    pass = newPass;
  });

  after(() => {
    LoginPage.visit();
    MainPage.settingsButton().click();
    SettingsPage.inputPassword("nohaga2564");
    SettingsPage.submit();
    cy.wait(1000);
  });
});