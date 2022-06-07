const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:true, executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'});
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.pdf({ path: 'pdfscreen-1.pdf', format: 'a4' });
  await browser.close();
})();