const puppeteer = require('puppeteer');

(async () => {
  
  const browser = await puppeteer.launch({headless:true, executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'});
  await page.tracing.start({ path: 'profile.json' });
  await page.goto('https://google.com');
  await page.screenshot({ path: 'screen-1.png' });
  await page.tracing.stop();
  await browser.close();
})();