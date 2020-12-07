# web-complete



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute         | Description                                                                                                                                                                                                                                                                        | Type                                                                                           | Default                                                                                                                    |
| --------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `cssClasses`          | --                | The class names, which should be set on the rendered html elements                                                                                                                                                                                                                 | `{ wrapper: string; input: string; suggestions: string; suggestion: string; active: string; }` | `{     wrapper: "",     input: "",     suggestions: "suggestions",     suggestion: "suggestion",     active: "active"   }` |
| `disabled`            | `disabled`        | Enable/Disable the input field                                                                                                                                                                                                                                                     | `boolean`                                                                                      | `false`                                                                                                                    |
| `inputId`             | `input-id`        | id of the input field                                                                                                                                                                                                                                                              | `string`                                                                                       | `""`                                                                                                                       |
| `inputmode`           | `inputmode`       | A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.                                                                                                                   | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url"`          | `undefined`                                                                                                                |
| `maxSuggestions`      | `max-suggestions` | The maximally shown suggestions in the list                                                                                                                                                                                                                                        | `number`                                                                                       | `5`                                                                                                                        |
| `minInput`            | `min-input`       | The minimum input size for generating suggestions                                                                                                                                                                                                                                  | `number`                                                                                       | `0`                                                                                                                        |
| `placeholder`         | `placeholder`     | The placeholder for the input field                                                                                                                                                                                                                                                | `string`                                                                                       | `""`                                                                                                                       |
| `required`            | `required`        | Form validation: is the form input required                                                                                                                                                                                                                                        | `boolean`                                                                                      | `false`                                                                                                                    |
| `suggestionGenerator` | --                | Async suggestion generator: `text` is the displayed for users in the form after selection (if no `suggesion` also as suggesion) `value` is the actual value of the form field optional `suggesion` if the autocomplete suggestion item should be formatted differently than `text` | `(text: string) => Promise<{ text: string; value: string; suggestion?: string; }[]>`           | `undefined`                                                                                                                |
| `text`                | `text`            | The text is displayed by the form field for users                                                                                                                                                                                                                                  | `string`                                                                                       | `""`                                                                                                                       |
| `value`               | `value`           | The actual value of the form field                                                                                                                                                                                                                                                 | `string`                                                                                       | `""`                                                                                                                       |


## Events

| Event        | Description                                        | Type               |
| ------------ | -------------------------------------------------- | ------------------ |
| `selected`   | Emitted when an item from suggestions was selected | `CustomEvent<any>` |
| `unselected` | Emitted when item was cleared/unselected           | `CustomEvent<any>` |


## Methods

### `clear() => Promise<void>`

Clears the form field (suggestions and selection)

#### Returns

Type: `Promise<void>`



### `getText() => Promise<string>`

Returns the `text` of the selected item

#### Returns

Type: `Promise<string>`



### `getValue() => Promise<string>`

Returns the `value` of the selected item

#### Returns

Type: `Promise<string>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
