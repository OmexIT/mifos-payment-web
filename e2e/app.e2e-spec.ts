import { MifosPaymentWebPage } from './app.po';

describe('mifos-payment-web App', () => {
  let page: MifosPaymentWebPage;

  beforeEach(() => {
    page = new MifosPaymentWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
