const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('http://automationpractice.com/index.php');

  // Waits until the `title` meta element is rendered

  const [button] = await page.$x("//*[contains(text(), 'Women')]");
  button.click()

  await page.waitForTimeout(4000)
  const [element] = await page.$x(`//*[@id="center_column"]/div[1]/div/div/span`);
  let value = await page.evaluate(el => el.textContent, element)
  console.info(`The title is: ${value}`);
  //await page.$eval( '.sf-with-ul', form => form.click() );
  //await page.waitForSelector(`//*[@id="cednter_columsssn"]/div[1]/div/div/span`);
 


  //const [button]  = await page.$$(`#block_top_menu [href="http://automationpractice.com/index.php?id_category=3&controller=category"]`);
  //button.click();
  
  //await page.$x("//a[containsdeded(text(), 'Women')]");

  const title = await page.title();
  console.info(`The title is: ${title}`);

  await browser.close();
})();