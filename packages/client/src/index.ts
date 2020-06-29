import * as puppeteer from 'puppeteer';
import { getCredentials } from './credentials';
import { Credentials } from './types';
import { baseConfig } from './default-config';

(async () => {
    const browser = await puppeteer.launch({
        product: 'firefox',
        headless: false,
        args: ['--no-sandbox', '--start-maximized', '--start-fullscreen'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });

    const surflineCredentials: Credentials = getCredentials();

    await page.goto('https://www.surfline.com/sign-in?');

    await page.waitFor('#email');

    await page.type('#email', surflineCredentials.username, { delay: 20 });
    await page.type('#password', surflineCredentials.password, { delay: 20 });

    await page.click('form button.quiver-button');

    await page.waitFor('a.quiver-navigation-item__container__link');

    // add correct favorites
    await page.evaluate((config) => {
        localStorage.setItem('multi-cam:preferences', config);
    }, JSON.stringify(baseConfig));

    await page.goto('https://www.surfline.com/surf-cams?');

    // Enter fullscreen
    await page.waitFor('div.sl-multi-cam-container');
    await page.click('div.sl-multi-cam__controls button.sl-fullscreen-toggle-button');
})();
