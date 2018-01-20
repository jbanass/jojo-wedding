import { JojoWeddingPage } from './app.po';

describe('jojo-wedding App', () => {
  let page: JojoWeddingPage;

  beforeEach(() => {
    page = new JojoWeddingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
