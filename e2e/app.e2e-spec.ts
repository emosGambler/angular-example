import { GorajAngularTestApplicationPage } from './app.po';

describe('goraj-angular-test-application App', function() {
  let page: GorajAngularTestApplicationPage;

  beforeEach(() => {
    page = new GorajAngularTestApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
