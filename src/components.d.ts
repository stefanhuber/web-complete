/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface WebComplete {
    /**
    * Clears the form field (suggestions and selection)
    */
    'clear': () => Promise<void>;
    /**
    * The class names, which should be set on the rendered html elements
    */
    'cssClasses': { wrapper: string; input: string; suggestions: string; suggestion: string; active: string; };
    /**
    * Enable/Disable the input field
    */
    'disabled': boolean;
    /**
    * Returns the `text` of the selected item
    */
    'getText': () => Promise<string>;
    /**
    * Returns the `value` of the selected item
    */
    'getValue': () => Promise<string>;
    /**
    * The maximally shown suggestions in the list
    */
    'maxSuggestions': number;
    /**
    * The minimum input size for generating suggestions
    */
    'minInput': number;
    /**
    * The placeholder for the input field
    */
    'placeholder': string;
    /**
    * Async suggestion generator: `text` is the displayed for users in the form after selection (if no `suggesion` also as suggesion) `value` is the actual value of the form field optional `suggesion` if the autocomplete suggestion item should be formatted differently than `text`
    */
    'suggestionGenerator': (text:string) => Promise<Array<{text:string, value:string, suggestion?:string}>>;
    /**
    * The text is displayed by the form field for users
    */
    'text': string;
    /**
    * The actual value of the form field
    */
    'value': string;
  }
}

declare global {


  interface HTMLWebCompleteElement extends Components.WebComplete, HTMLStencilElement {}
  var HTMLWebCompleteElement: {
    prototype: HTMLWebCompleteElement;
    new (): HTMLWebCompleteElement;
  };
  interface HTMLElementTagNameMap {
    'web-complete': HTMLWebCompleteElement;
  }
}

declare namespace LocalJSX {
  interface WebComplete {
    /**
    * The class names, which should be set on the rendered html elements
    */
    'cssClasses'?: { wrapper: string; input: string; suggestions: string; suggestion: string; active: string; };
    /**
    * Enable/Disable the input field
    */
    'disabled'?: boolean;
    /**
    * The maximally shown suggestions in the list
    */
    'maxSuggestions'?: number;
    /**
    * The minimum input size for generating suggestions
    */
    'minInput'?: number;
    /**
    * Emitted when an item from suggestions was selected
    */
    'onSelected'?: (event: CustomEvent<any>) => void;
    /**
    * Emitted when item was cleared/unselected
    */
    'onUnselected'?: (event: CustomEvent<any>) => void;
    /**
    * The placeholder for the input field
    */
    'placeholder'?: string;
    /**
    * Async suggestion generator: `text` is the displayed for users in the form after selection (if no `suggesion` also as suggesion) `value` is the actual value of the form field optional `suggesion` if the autocomplete suggestion item should be formatted differently than `text`
    */
    'suggestionGenerator'?: (text:string) => Promise<Array<{text:string, value:string, suggestion?:string}>>;
    /**
    * The text is displayed by the form field for users
    */
    'text'?: string;
    /**
    * The actual value of the form field
    */
    'value'?: string;
  }

  interface IntrinsicElements {
    'web-complete': WebComplete;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'web-complete': LocalJSX.WebComplete & JSXBase.HTMLAttributes<HTMLWebCompleteElement>;
    }
  }
}


