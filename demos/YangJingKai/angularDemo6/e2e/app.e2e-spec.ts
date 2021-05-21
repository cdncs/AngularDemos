import { Angulardemo06Page } from './app.po';

describe('angulardemo06 App', function() {
  let page: Angulardemo06Page;

  beforeEach(() => {
    page = new Angulardemo06Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
