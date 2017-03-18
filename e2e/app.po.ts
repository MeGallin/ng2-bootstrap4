import { browser, element, by } from 'protractor';

export class Boot4AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bs4-root h1')).getText();
  }
}
