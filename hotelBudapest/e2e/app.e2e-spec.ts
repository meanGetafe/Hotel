import { HotelBudapestPage } from './app.po';

describe('hotel-budapest App', function() {
  let page: HotelBudapestPage;

  beforeEach(() => {
    page = new HotelBudapestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
