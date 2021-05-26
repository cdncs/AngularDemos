import { Angulardemo09Page } from './app.po';

describe('angulardemo09 App', function() {
  let page: Angulardemo09Page;

  beforeEach(() => {
    page = new Angulardemo09Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
