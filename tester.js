const { chromium } = require('@playwright/test');
const path = require('path');

async function runAgent() {
    console.log("🤖 Agent starting Chromium browser...");
    
    // 1. Launch browser. headless: false means we can actually watch it happen!
    // slowMo slows it down slightly so human eyes can see the typing.
    const browser = await chromium.launch({ headless: false, slowMo: 600 }); 
    const page = await browser.newPage();

    // 2. Load our local HTML file
    const htmlFilePath = `file://${path.join(__dirname, 'src', 'index.html')}`;
    await page.goto(htmlFilePath);

    console.log("📝 Typing Transaction ID into the system...");
    // 3. Find the input box by its ID and type text
    await page.fill('#tx-id', 'TXN-9999-BFSI');

    console.log("🖱️ Clicking 'Trace Lineage' button...");
    // 4. Click the button
    await page.click('#trace-btn');

    // 5. Read the result from the screen
    const statusText = await page.innerText('#status-message');
    console.log(`\n🎯 Result read from screen: ${statusText}\n`);

    // 6. Close the browser
    await browser.close();
    console.log("🏁 Automated testing complete.");
}

runAgent();