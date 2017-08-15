import { CoderDecoderPage } from './app.po';

describe('coder-decoder App', () => {
  let page: CoderDecoderPage;

  beforeEach(() => {
    page = new CoderDecoderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
