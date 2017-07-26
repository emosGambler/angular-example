import { GorajAngularTestApplication2Page } from './app.po';

describe('goraj-angular-test-application2 App', function() {
  let page: GorajAngularTestApplication2Page;

  beforeEach(() => {
    page = new GorajAngularTestApplication2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
