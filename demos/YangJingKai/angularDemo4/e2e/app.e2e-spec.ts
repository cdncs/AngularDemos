import { Angulardemo03Page } from './app.po';

describe('angulardemo03 App', function() {
  let page: Angulardemo03Page;

  beforeEach(() => {
    page = new Angulardemo03Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
