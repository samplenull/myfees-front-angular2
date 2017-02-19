import { MyfeesFrontPage } from './app.po';

describe('myfees-front App', () => {
  let page: MyfeesFrontPage;

  beforeEach(() => {
    page = new MyfeesFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
