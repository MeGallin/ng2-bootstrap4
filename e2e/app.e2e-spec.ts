import { Boot4AppPage } from './app.po';

describe('boot4-app App', function() {
  let page: Boot4AppPage;

  beforeEach(() => {
    page = new Boot4AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bs4 works!');
  });
});
