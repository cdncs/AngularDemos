import { Angulardemo10Page } from './app.po';

describe('angulardemo10 App', function() {
  let page: Angulardemo10Page;

  beforeEach(() => {
    page = new Angulardemo10Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
