import { Angulardemo14Page } from './app.po';

describe('angulardemo14 App', function() {
  let page: Angulardemo14Page;

  beforeEach(() => {
    page = new Angulardemo14Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
