# web-complete



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute           | Description | Type                                                                                           | Default                                                                                                                    |
| --------------------- | ------------------- | ----------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `cssClasses`          | --                  |             | `{ wrapper: string; input: string; suggestions: string; suggestion: string; active: string; }` | `{     wrapper: "",     input: "",     suggestions: "suggestions",     suggestion: "suggestion",     active: "active"   }` |
| `disabled`            | `disabled`          |             | `boolean`                                                                                      | `false`                                                                                                                    |
| `inputPlaceholder`    | `input-placeholder` |             | `string`                                                                                       | `""`                                                                                                                       |
| `maxSuggestions`      | `max-suggestions`   |             | `number`                                                                                       | `5`                                                                                                                        |
| `minInput`            | `min-input`         |             | `number`                                                                                       | `0`                                                                                                                        |
| `suggestionGenerator` | --                  |             | `(text: string) => Promise<{ text: string; value: string; }[]>`                                | `undefined`                                                                                                                |


## Events

| Event        | Description | Type               |
| ------------ | ----------- | ------------------ |
| `selected`   |             | `CustomEvent<any>` |
| `unselected` |             | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
