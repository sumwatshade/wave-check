import * as puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({
        product: 'chrome',
        headless: false,
        args: ['--no-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.pdf({ path: 'google.pdf' });
    await browser.close();
})();
