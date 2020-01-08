![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/web-complete) [![Build Status](https://travis-ci.com/stefanhuber/web-complete.svg?branch=master)](https://travis-ci.com/stefanhuber/web-complete)

> `web-complete` is a lightweight, dependency-free, styleable autocomplete web component.

# Installation

## Script tag

```html
<script src='https://unpkg.com/web-complete/dist/web-complete.js'></script>
```

## Node Module

 - Install via npm: `npm install web-complete --save`
 - Add script to html: `<script src='node_modules/web-complete/dist/web-complete.js'></script>`

## Framework integration

For integration with different frameworks the [stencil docs](https://stenciljs.com/docs/overview) should be consulted.

# Using this component

Add the component to your html:
```html
<web-complete id="my-web-complete"></web-complete>
```

Add some javascript for additional configuration:
```javascript
const webcomplete = document.querySelector('#my-web-complete');

// change css classes for styling
webcomplete.cssClasses = {
  "wrapper": "dropdown",
  "input": "form-control",
  "suggestions": "dropdown-menu show",
  "suggestion": "dropdown-item",
  "active": "active"
};

// add an async suggestion generator
webcomplete.suggestionGenerator = function(text) {
  return new Promise(function(resolve, reject) {
    // generate suggestions with input text
    // e.g. by using http fetch 
  });
};

// listen to selected/unselected events
webcomplete.addEventListener('selected', function(e) {
  // suggestion selected (e.detail)
});
webcomplete.addEventListener('unselected', function(e) {
  // suggestion unselected (e.detail)
});
```

A full example with [Bootstrap 4 Dropdown](https://getbootstrap.com/docs/4.3/components/dropdowns/) theming can be found [here](https://github.com/stefanhuber/web-complete/blob/master/docs/index.html).

# Component API

## Properties

| Property              | Attribute         | Description                                                                                                                                                                                                                                                                        | Type                                                                                           | Default                                                                                                                    |
| --------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `cssClasses`          | --                | The class names, which should be set on the rendered html elements                                                                                                                                                                                                                 | `{ wrapper: string; input: string; suggestions: string; suggestion: string; active: string; }` | `{     wrapper: "",     input: "",     suggestions: "suggestions",     suggestion: "suggestion",     active: "active"   }` |
| `disabled`            | `disabled`        | Enable/Disable the input field                                                                                                                                                                                                                                                     | `boolean`                                                                                      | `false`                                                                                                                    |
| `inputId`             | `input-id`        | id of the input field                                                                                                                                                                                                                                                              | `string`                                                                                       | `""`                                                                                                                       |
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


# Developer 

```
npm i            install dependencies
npm start        start local development 
npm run build    build component for production
npm test         run e2e tests
```
