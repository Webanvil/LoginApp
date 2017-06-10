import { browser, by, element } from 'protractor';

export class LoginAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('LA-root h1')).getText();
  }
}
