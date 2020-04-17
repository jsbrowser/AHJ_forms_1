import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('INN/OGRN form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000/';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 100,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });

  test('popover open and close', async () => {
    await page.goto(baseUrl);
    const input = await page.$('[data-id=btn]');
    input.click();
    await page.waitForSelector('[data-id=popover_block].open');
    input.click();
    await page.waitForSelector('[data-id=popover_block].close');
  });
});
