
const {Builder, By, Key, until} = require('selenium-webdriver');

async function seleniumTests() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://redditminimalproject.netlify.app/');

    await driver.quit();
};

seleniumTests();

// const assert = require('assert');

