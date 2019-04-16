import React, { Component } from 'react';
import './App.css';
import GetInput from './GetInput';
import RenderInput from './RenderInput';


class App extends Component {
  constructor(props){
    super(props);
    this.state={input: 'Placeholder Text.  Set inital input to empty string later.'};

    this.handleChange = this.handleChange.bind(this);
  }

 handleChange(event) {
  this.setState({input: event.target.value})
 }

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
            <div id="preview">
              <div id="preview-header">P R E V I E W</div>
              <div id="preview-output"><RenderInput input={this.state.input}/></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
