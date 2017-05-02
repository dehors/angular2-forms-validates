import { FormsValidatesPage } from './app.po';

describe('forms-validates App', () => {
  let page: FormsValidatesPage;

  beforeEach(() => {
    page = new FormsValidatesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
