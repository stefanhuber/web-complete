import { newE2EPage } from '@stencil/core/testing';

describe('web-complete', () => {

  it('should set text and value on inner input field', async () => {
    const page = await newE2EPage();
    await page.setContent(`<web-complete text="some demo text" value="123"></web-complete>`);
    
    const complete = await page.find('web-complete');
    
    const value = await complete.callMethod('getValue');
    const text = await complete.callMethod('getText');

    expect(value).toEqual('123');
    expect(text).toEqual('some demo text');
  });

  it('should clear web-complete field', async () => {
    const page = await newE2EPage();
    await page.setContent(`<web-complete text="some demo text" value="123"></web-complete>`);
    
    const complete = await page.find('web-complete');
    const unselected = await complete.spyOnEvent('unselected');

    await complete.callMethod('clear');

    const value = await complete.callMethod('getValue');
    const text = await complete.callMethod('getText');

    expect(value).toEqual('');
    expect(text).toEqual('');

    expect(unselected).toHaveReceivedEventDetail({
      text: 'some demo text',
      value: '123'
    });

  });

});

