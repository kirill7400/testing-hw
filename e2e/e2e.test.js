import puppeteer from 'puppeteer';
import {jest, test, beforeEach, describe, afterEach} from '@jest/globals';

jest.setTimeout(30000);

describe('page test', () => {
  let browser;
  let page;

  beforeEach(async() => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true
    });

    page = await browser.newPage()
  });

  test('test add valid class', async () => {
    await page.goto('http://localhost:8080/')

    await page.waitFor('.card-form')

    const form = await page.$('.card-form')
    const input = await form.$('.input-form')
    const btn = await page.$('.btn-form')

    await input.type('4916293035632963')
    await btn.click()

    await page.waitFor('.card-form .valid-card')
  })

  test('test invalid num', async () => {
    await page.goto('http://localhost:8080/')

    await page.waitFor('.card-form')

    const form = await page.$('.card-form')
    const input = await form.$('.input-form')
    const btn = await page.$('.btn-form')

    await input.type('491629632963')
    await btn.click()

    await page.waitFor('.card-form')
  })

  afterEach(async () => {
    await browser.close()
  })
});
