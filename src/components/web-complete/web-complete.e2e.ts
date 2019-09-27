import { newE2EPage } from '@stencil/core/testing';

describe('web-complete', () => {
  it('should set text and value on inner input field', async () => {
    const page = await newE2EPage();
    await page.setContent(`<web-complete text="some demo text" value="123"></web-complete>`);
    
    const complete = await page.find('web-complete');
    const input = await page.find('web-complete input');
    
    const value = await complete.callMethod('getValue');
    const text = await complete.callMethod('getText');

    expect(value).toEqual('123');
    expect(text).toEqual('some demo text');
    expect(input.getAttribute('value')).toEqual('some demo text');
  });
});

