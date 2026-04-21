// Suppress url.parse() deprecation warning
if (typeof process !== 'undefined') {
    const originalEmitWarning = process.emitWarning;
    process.emitWarning = (warning, ...args) => {
        if (typeof warning === 'string' && warning.includes('url.parse')) return;
        if (typeof warning === 'object' && warning.message && warning.message.includes('url.parse')) return;
        originalEmitWarning.call(process, warning, ...args);
    };
}

const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');

    // click theme toggle twice to get to light theme
    await page.click('button[aria-label="Toggle Theme"]'); // vibe
    await page.click('button[aria-label="Toggle Theme"]'); // light

    // Get computed style 
    const bg = await page.evaluate(() => {
        return {
            htmlClass: document.documentElement.className,
            bodyClass: document.body.className,
            bodyBg: window.getComputedStyle(document.body).backgroundColor,
            mainBg: window.getComputedStyle(document.querySelector('main')).backgroundColor,
        }
    });

    console.log(JSON.stringify(bg, null, 2));
    await browser.close();
})();
