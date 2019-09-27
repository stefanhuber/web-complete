# web-complete



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute         | Description                                                                                                 | Type                                                                                           | Default                                                                                                                    |
| --------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `cssClasses`          | --                | The class names, which should be set on the rendered html elements                                          | `{ wrapper: string; input: string; suggestions: string; suggestion: string; active: string; }` | `{     wrapper: "",     input: "",     suggestions: "suggestions",     suggestion: "suggestion",     active: "active"   }` |
| `disabled`            | `disabled`        | Enable/Disable the input field                                                                              | `boolean`                                                                                      | `false`                                                                                                                    |
| `maxSuggestions`      | `max-suggestions` | The maximally shown suggestions in the list                                                                 | `number`                                                                                       | `5`                                                                                                                        |
| `minInput`            | `min-input`       | The minimum input size for generating suggestions                                                           | `number`                                                                                       | `0`                                                                                                                        |
| `placeholder`         | `placeholder`     | The placeholder for the input field                                                                         | `string`                                                                                       | `""`                                                                                                                       |
| `suggestionGenerator` | --                | Async suggestion generator: `text` is the displayed for users `value` is the actual value of the form field | `(text: string) => Promise<{ text: string; value: string; }[]>`                                | `undefined`                                                                                                                |
| `text`                | `text`            | The text is displayed by the form field for users                                                           | `string`                                                                                       | `""`                                                                                                                       |
| `value`               | `value`           | The actual value of the form field                                                                          | `string`                                                                                       | `""`                                                                                                                       |


## Events

| Event        | Description                                        | Type               |
| ------------ | -------------------------------------------------- | ------------------ |
| `selected`   | Emitted when an item from suggestions was selected | `CustomEvent<any>` |
| `unselected` | Emitted when item was cleared/unselected           | `CustomEvent<any>` |


## Methods

### `getText() => Promise<string>`

Returns the `text` of selected item

#### Returns

Type: `Promise<string>`



### `getValue() => Promise<string>`

Returns the `value` of selected item

#### Returns

Type: `Promise<string>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
