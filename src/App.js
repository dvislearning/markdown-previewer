import React, { Component } from 'react';
import './App.css';
import GetInput from './GetInput';
import initialText from './initialtext'
import marked from 'marked';

marked.setOptions({
  breaks: true,
});

class App extends Component {
  constructor(props){
    super(props);
    this.state={input: initialText};


    this.handleChange = this.handleChange.bind(this);
    this.markup = this.markup.bind(this);
  }

 handleChange(event) {
  this.setState({input: event.target.value})
 }

 markup(text) {
    return  marked(text, {sanitize: true})
  };

  render() {

    return (
      <div className="App">
        <div id="App-container">
          <div id="header">
            <div id="header-text">DV'S MARKDOWN PREVIEWER<div id="header-blink">_</div></div>
          </div>
          <div id="content">
            <div id="editor-section">
              <div id="editor-header">E D I T O R</div>
              <div id="editor-output"><GetInput input={this.state.input} onChange={this.handleChange}/></div>
            </div>
            <div id="preview-section">
              <div id="preview-header">P R E V I E W</div>
              <div id="preview" dangerouslySetInnerHTML={ {__html: marked(this.state.input) } }></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
