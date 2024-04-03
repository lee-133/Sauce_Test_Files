const {Builder, By, Key, until} = require('selenium-webdriver')
const SauceLabs = require('saucelabs').default;
const assert = require('assert');
const utils = require('./utils')

const SAUCE_USERNAME = process.env.SAUCE_USERNAME;
const SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY;
const ONDEMAND_URL = `https://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.saucelabs.com:443/wd/hub`;
// NOTE: Use the URL below if using our EU datacenter (e.g. logged in to app.eu-central-1.saucelabs.com)
// const ONDEMAND_URL = `https://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.eu-central-1.saucelabs.com:443/wd/hub`;

/**
* Task I: Update the test code so when it runs, the test clicks the "I am a link" link.
*
* Task II - Comment out the code from Task I. Update the test code so when it runs, 
* the test is able to write "Sauce" in the text box that currently says "I has no focus".
*
* Task III - Update the test code so when it runs, it adds an email to the email field, 
* adds text to the comments field, and clicks the "Send" button.
* Note that email will not actually be sent!
*
* Task IV - Add a capability that adds a tag to each test that is run.
* See this page for instructions: https://docs.saucelabs.com/dev/test-configuration-options/
* 
* Task V: Set the status of the test so it shows as "passed" instead of "complete".
* We've included the node-saucelabs package already. For more info see:
* https://github.com/saucelabs/node-saucelabs
*/

describe('Working Sauce', function () {
    it('should go to Google and click Sauce', async function () {
        let driver = await new Builder().withCapabilities({
            ...utils.workingCapabilities,
            // Task IV
            /*
            tags: ['Task_I', 'Task_II', 'Task_III', 'Task_IV', 'Task_V']
            */
            
        }).usingServer(ONDEMAND_URL).build();


    /**
     * Goes to Sauce Lab's guinea-pig page and verifies the title
     */

    await driver.get("https://saucelabs.com/test/guinea-pig");
    await assert.strictEqual("I am a page title - Sauce Labs", await driver.getTitle());

    // Task I
    // await driver.executeScript('sauce:context=Task_I');
    // await driver.findElement(By.id('i am a link')).click();

    // Task II
    /*
    await driver.executeScript('sauce:context=Task_II');
    await driver.findElement(By.id('i_am_a_textbox')).clear();
    await driver.findElement(By.id('i_am_a_textbox')).sendKeys('Sauce');
    */

    // Task III
    /*
    await driver.executeScript('sauce:context=Task_III');
    await driver.findElement(By.id('fbemail')).sendKeys('leesnyder133@icloud.com');
    await driver.findElement(By.id('comments')).sendKeys('Hello World!');
    await driver.findElement(By.id('submit')).click();
    */

    // Task V
    /*
    await driver.executeScript('sauce:context=Task_V');
    await driver.executeScript("sauce:job-result=passed");
    */

    await driver.quit();
    });
});
