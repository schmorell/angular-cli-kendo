import { G6WebPage } from './app.po';

describe('g6-web App', () => {
  let page: G6WebPage;

  beforeEach(() => {
    page = new G6WebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
