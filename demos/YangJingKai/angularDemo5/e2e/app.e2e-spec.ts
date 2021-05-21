import { Angulardemo05Page } from './app.po';

describe('angulardemo05 App', function() {
  let page: Angulardemo05Page;

  beforeEach(() => {
    page = new Angulardemo05Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
