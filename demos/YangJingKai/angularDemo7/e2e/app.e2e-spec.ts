import { Angulardemo07Page } from './app.po';

describe('angulardemo07 App', function() {
  let page: Angulardemo07Page;

  beforeEach(() => {
    page = new Angulardemo07Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
