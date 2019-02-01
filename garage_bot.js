const puppeteer = require('puppeteer');
async function run() {
const browser = await puppeteer.launch({
      headless: false,
      slowMo: 250 });
  const page = await browser.newPage();
  await page.setViewport({width: 800, height: 1028});
  const url = "https://www.dotprs.nyc"

puppeteer.launch().then(async browser => {
  page.on('dialog', async dialog => {
    console.log(dialog.message());
    //console.log(dialog.type());
    await dialog.dismiss();
  });
});
  await page.goto(url);
  console.log("go to parking garage page")
  await page.click('input[type=submit]');

  await page.click("#nid-30 > div.loc-info.pull-left > div > span")
  await page.waitFor(2000);
  await page.click('#step-one > input');

  console.log("fill in name")
  await page.focus ('#edit-field-first-name-und-0-value');
  await page.keyboard.type("the");
  await page.focus ('#edit-title');
  await page.keyboard.type("migos");

  console.log("fill in phone number")
  await page.focus ('#edit-field-phone-number-und-0-value');
  await page.keyboard.type("5555555555");
  
  console.log("fill in email")
  await page.focus ('#edit-field-email-address-und-0-email');
  await page.keyboard.type("tester@gmail.com");

  console.log("fill in address")
  await page.focus ('#edit-field-address-und-0-value');
  await page.keyboard.type("99 fear st");
  
  console.log("fill in zip code")
  await page.focus ('#edit-field-zipcode-und-0-value');
  await page.keyboard.type("10002");
  
  console.log("fill in drivers license")
  await page.focus ('#edit-field-dmv-number-und-0-value');
  await page.keyboard.type("123456789");
}

run();


