const { Cluster } = require('puppeteer-cluster');

(async () => {
    const cluster = await Cluster.launch({
      concurrency: Cluster.CONCURRENCY_CONTEXT,
      maxConcurrency: 10,
      puppeteerOptions: {
          headless: false,
          executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
          args: ['--no-sandbox']
      }
    });
  
    await cluster.task(async ({ page, data: url }) => {
      await page.goto(url);
      const screen = await page.screenshot();
      // Store screenshot, do something else
    });
  
    cluster.queue('http://www.google.com/');
    cluster.queue('http://www.wikipedia.org/');
    cluster.queue('http://www.google.com/');
    cluster.queue('http://www.wikipedia.org/');
    cluster.queue('http://www.google.com/');
    cluster.queue('http://www.wikipedia.org/');
    cluster.queue('http://www.google.com/');
    cluster.queue('http://www.wikipedia.org/');
    cluster.queue('http://www.google.com/');
    cluster.queue('http://www.wikipedia.org/');
    cluster.queue('http://www.google.com/');
    cluster.queue('http://www.wikipedia.org/');
    cluster.queue('http://www.google.com/');
    cluster.queue('http://www.wikipedia.org/');
    cluster.queue('http://www.google.com/');
    cluster.queue('http://www.wikipedia.org/');
    cluster.queue('http://www.google.com/');
    cluster.queue('http://www.wikipedia.org/');
    // many more pages
  
    await cluster.idle();
    await cluster.close();
  })();