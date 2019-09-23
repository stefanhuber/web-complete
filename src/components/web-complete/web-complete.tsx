import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'web-complete',
  shadow: false
})
export class Autocomplete {

  @State() text = "";
  @State() value = "";
  @State() activeIndex = -1;
  @State() data:Array<{text:string, value:string}> = [];

  @Prop() inputPlaceholder = "";
  @Prop() disabled = false;
  @Prop() minInput = 0;
  @Prop() maxSuggestions = 5;
  @Prop() suggestionGenerator:(text:string) => Promise<Array<{text:string, value:string}>>;
  @Prop() cssClasses = {
    wrapper: "",
    input: "",
    suggestions: "suggestions",
    suggestion: "suggestion",
    active: "active"
  };

  @Event() selected: EventEmitter;
  @Event() unselected: EventEmitter; 

  handleKeyDown(keyCode) {
    if (keyCode == 40 || keyCode == 38) { // up/down arrows
      event.preventDefault();
      this.handleActivation(keyCode == 40)
    } else if (keyCode == 13 || keyCode == 9) { // enter/tab
      event.preventDefault();
      this.handleSelection(this.activeIndex);      
    } else if (keyCode == 27) { // esc
      this.clearSelection();
      this.clearData();
    }
  }

  handleKeyUp(keyCode, text) {
    if ([40,38,13,9,27].indexOf(keyCode) < 0) {
      this.clearSelection(true);      
      this.prepareSuggestions(text);
    }
    this.text = text;
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
  }

  clearSelection(clearOnlyValue = false) {
    if (this.value != "") {
      this.unselected.emit({
        text: this.text,
        value: this.value
      });
      this.value = "";
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
          type="text"
          autocomplete="off"
          disabled={this.disabled}
          placeholder={this.inputPlaceholder}
          />
        { this.data && this.data.length > 0
          ? <div class={this.cssClasses.suggestions}>{ this.data.map((suggestion, index) => {
            return <button onClick={ () => this.handleSelection(index) }
                           class={this.cssClasses.suggestion + (this.activeIndex == index ? (" " + this.cssClasses.active) : "")}
                           data-value={suggestion.value}>{suggestion.text}</button>
          })}</div>
          : ""
        }
      </div>
    );
  }
}