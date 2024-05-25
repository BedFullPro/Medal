const puppeteer = require('puppeteer');

(async () => {
  // Launch a new browser instance in headless mode
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Function to perform the task
  const playVideo = async () => {
    try {
      // Go to the provided URL
      await page.goto('https://medal.tv/u/kidtelly', { waitUntil: 'domcontentloaded' });

      // Wait for the play button SVG to be available and click it
      await page.waitForSelector('svg path[d="M5.875 2.17598L19.625 11.051C20.375 11.551 20.375 12.676 19.625 13.176L5.875 21.801C5.125 22.426 4 21.801 4 20.801V3.30098C4 2.30098 5.125 1.67598 5.875 2.17598Z"]', { timeout: 3000 });
      await page.click('svg path[d="M5.875 2.17598L19.625 11.051C20.375 11.551 20.375 12.676 19.625 13.176L5.875 21.801C5.125 22.426 4 21.801 4 20.801V3.30098C4 2.30098 5.125 1.67598 5.875 2.17598Z"]');

      // Wait for a short time to simulate the video starting
      await page.waitForTimeout(2000); // wait for 2 seconds

      // Refresh the page
      await page.reload({ waitUntil: 'domcontentloaded' });

      // Repeat the process
      await playVideo();
    } catch (error) {
      console.error('Error during automation:', error);
      await playVideo(); // Retry on error
    }
  };

  // Start the process
  await playVideo();
})();
