import { Component, ComponentInterface, Prop, h, State, Event, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'web-complete',
  shadow: false
})
export class Autocomplete implements ComponentInterface {

  @State() activeIndex = -1;
  @State() data: Array<{ text: string, value: string, suggestion?: string }> = [];
  @State() active: boolean = false;

  /**
   * The text is displayed by the form field for users
   */
  @Prop({ mutable: true }) text = "";

  /**
   * The actual value of the form field
   */
  @Prop({ mutable: true }) value = "";

  /**
   * The placeholder for the input field
   */
  @Prop() placeholder = "";

  /**
   * Clear if no selection or not
   */
  @Prop() clearOnUnselectedClosing: boolean = true;

  /**
   * Enable/Disable the input field
   */
  @Prop() disabled = false;

  /**
   * The minimum input size for generating suggestions
   */
  @Prop() minInput = 0;

  /**
   * The maximally shown suggestions in the list
   */
  @Prop() maxSuggestions = 5;

  /**
   * Form validation: is the form input required
   */
  @Prop() required = false;

  /**
   * A hint to the browser for which keyboard to display.
   * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
   * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
   */
  @Prop() inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';

  /**
   * id of the input field
   */
  @Prop() inputId = "";

  /**
   * Async suggestion generator:
   * `text` is the displayed for users in the form after selection (if no `suggesion` also as suggesion)
   * `value` is the actual value of the form field
   * optional `suggesion` if the autocomplete suggestion item should be formatted differently than `text`
   */
  @Prop() suggestionGenerator: (text: string) => Promise<Array<{ text: string, value: string, suggestion?: string }>>;

  /**
   * The class names, which should be set on the rendered html elements
   */
  @Prop() cssClasses = {
    wrapper: "",
    input: "",
    suggestions: "suggestions",
    suggestion: "suggestion",
    active: "active"
  };

  /**
   * Emitted when an item from suggestions was selected
   */
  @Event() selected: EventEmitter;

  /**
   * Emitted when item was cleared/unselected
   */
  @Event() unselected: EventEmitter;

  /**
   * Returns the `value` of the selected item
   */
  @Method()
  async getValue(): Promise<string> {
    return this.value;
  }

  /**
   * Returns the `text` of the selected item
   */
  @Method()
  async getText(): Promise<string> {
    return this.text;
  }

  /**
   * Clears the form field (suggestions and selection)
   */
  @Method()
  async clear() {
    this.handleClose();
  }

  handleKeyDown(keyCode) {
    if (keyCode == 40 || keyCode == 38) { // up/down arrows
      event.preventDefault();
      this.handleActivation(keyCode == 40)
    } else if (keyCode == 13 || keyCode == 9) { // enter/tab
      event.preventDefault();
      this.handleSelection(this.activeIndex);
    } else if (keyCode == 27) { // esc
      this.handleClose();
    }
  }

  handleKeyUp(keyCode, text) {
    if ([40, 38, 13, 9, 27].indexOf(keyCode) < 0) {
      this.clearSelection(true);
      this.prepareSuggestions(text);
    }
    this.active = true;
    this.text = text;
  }

  handleFocus(e: FocusEvent) {
    e.preventDefault();
    this.active = true;
  }

  handleBlur(e: FocusEvent) {
    e.preventDefault();

    setTimeout(() => {
      if (this.active) {
        if (this.value) {
          this.clearData();
        } else {
          this.handleClose();
        }
      }
    }, 250);
  }

  handleClose() {
    this.clearSelection();
    this.clearData();
  }

  handleActivation(next = true) {
    if (this.data.length > 0) {
      if (next && (this.activeIndex + 1) < this.data.length) {
        this.activeIndex += 1;
      } else if (next) {
        this.activeIndex = 0;
      } else if (!next && (this.activeIndex) > 0) {
        this.activeIndex -= 1;
      } else if (!next) {
        this.activeIndex = this.data.length - 1;
      }
    }
  }

  handleSelection(index) {
    if (index >= 0 && index < this.data.length) {
      this.text = this.data[index].text;
      this.value = this.data[index].value;
      this.selected.emit(this.data[index]);
      this.clearData();
    }
  }

  clearData() {
    this.data = [];
    this.activeIndex = -1;
    this.active = false;
  }

  clearSelection(clearOnlyValue = false) {
    if (this.value != "") {
      this.unselected.emit({
        text: this.text,
        value: this.value
      });
      console.log("this.clearOnUnselectedClosing", this.clearOnUnselectedClosing);
      if (this.clearOnUnselectedClosing) {
        this.value = "";
      }
    }
    if (!clearOnlyValue) {
      this.text = "";
    }
  }

  async prepareSuggestions(text) {
    if (this.suggestionGenerator && text.length >= this.minInput) {
      let suggestions = await this.suggestionGenerator(text);
      suggestions.splice(this.maxSuggestions);
      this.data = suggestions;
    } else {
      this.data = [];
    }
  }

  render() {
    return (
      <div class={this.cssClasses.wrapper}>
        <input
          value={this.text}
          class={this.cssClasses.input}
          onKeyDown={(e) => this.handleKeyDown(e.keyCode)}
          onKeyUp={(e) => this.handleKeyUp(e.keyCode, e.target['value'])}
          onBlur={(e) => { this.handleBlur(e) }}
          onFocus={(e) => { this.handleFocus(e) }}
          type="text"
          inputMode={this.inputmode}
          id={this.inputId}
          required={this.required}
          autocomplete="off"
          disabled={this.disabled}
          placeholder={this.placeholder}
        />
        { this.data && this.data.length > 0
          ? <div class={this.cssClasses.suggestions}>{this.data.map((suggestion, index) => {
            return <button onClick={() => this.handleSelection(index)}
              type="button"
              class={this.cssClasses.suggestion + (this.activeIndex == index ? (" " + this.cssClasses.active) : "")}
              data-value={suggestion.value}>{suggestion.suggestion ? suggestion.suggestion : suggestion.text}</button>
          })}</div>
          : ""
        }
      </div>
    );
  }
}