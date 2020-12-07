import { newE2EPage } from '@stencil/core/testing';

const addDummySuggestionGenerator = (element: any) => {
  element.suggestionGenerator = (text) => {
    return ["abcdef", "xyz", "test abc", "test xyz"]
      .filter(suggestion => suggestion.indexOf(text) >= 0)
      .map((suggestion, index) => {
        return {
          text: suggestion,
          value: 1000 + index
        }
      });
  };
};

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

  it('should generate suggestions on typing', async () => {
    const page = await newE2EPage();
    await page.setContent(`<web-complete></web-complete>`);
    
    await page.$eval('web-complete', addDummySuggestionGenerator);    
    await page.waitForChanges();

    const input = await page.find('web-complete > div > input');
    input.press('a');
    input.press('b');
    await page.waitForChanges();

    const suggestions = await page.findAll('web-complete > div > div > button');
    expect(suggestions.length).toEqual(2);
    expect(suggestions[0].textContent).toBe("abcdef");
    expect(suggestions[1].textContent).toBe("test abc");
  });

  it('should select suggestion on click', async () => {
    const page = await newE2EPage();
    await page.setContent(`<web-complete></web-complete>`);
    
    await page.$eval('web-complete', addDummySuggestionGenerator);       
    await page.waitForChanges();
    
    const input = await page.find('web-complete > div > input');
    input.press('a');
    input.press('b');
    await page.waitForChanges();

    const suggestions = await page.findAll('web-complete > div > div > button');
    suggestions[1].click();
    await page.waitForChanges();

    const complete = await page.find('web-complete');
    const value = await complete.callMethod('getValue');
    const text = await complete.callMethod('getText');
    expect(value).toEqual("1001");
    expect(text).toEqual("test abc");
  });

  it('should keep text after blur when clearOnUnselectedClosing = false', async () => {
    const page = await newE2EPage();
    await page.setContent(`<web-complete clear-on-unselected-closing="false"></web-complete>`);
    
    await page.$eval('web-complete', addDummySuggestionGenerator);       
    await page.waitForChanges();
    
    const input = await page.find('web-complete > div > input');
    input.press('v');
    input.press('w');
    await page.waitForChanges();

    const suggestions = await page.findAll('web-complete > div > div > button');
    expect(suggestions.length).toEqual(0);

    page.$eval('web-complete > div > input', element => element['blur']());
    await page.waitForTimeout(250);

    const complete = await page.find('web-complete');
    const value = await complete.callMethod('getValue');
    const text = await complete.callMethod('getText');
    expect(value).toEqual("");
    expect(text).toEqual("vw");
  });

  it('should remove text after blur when clearOnUnselectedClosing = true', async () => {
    const page = await newE2EPage();
    await page.setContent(`<web-complete></web-complete>`);
    
    await page.$eval('web-complete', addDummySuggestionGenerator);       
    await page.waitForChanges();
    
    const input = await page.find('web-complete > div > input');
    input.press('v');
    input.press('w');
    await page.waitForChanges();

    const suggestions = await page.findAll('web-complete > div > div > button');
    expect(suggestions.length).toEqual(0);

    page.$eval('web-complete > div > input', element => element['blur']());
    await page.waitForTimeout(250);

    const complete = await page.find('web-complete');
    const value = await complete.callMethod('getValue');
    const text = await complete.callMethod('getText');
    expect(value).toEqual("");
    expect(text).toEqual("");
  });

});

