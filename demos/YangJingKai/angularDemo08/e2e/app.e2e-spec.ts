import { Angulardemo08Page } from './app.po';

describe('angulardemo08 App', function() {
  let page: Angulardemo08Page;

  beforeEach(() => {
    page = new Angulardemo08Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
