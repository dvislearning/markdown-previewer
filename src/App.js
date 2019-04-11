import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
              <textarea id="editor" autoFocus></textarea>
            </div>
            <div id="preview">
              <div id="preview-header">P R E V I E W</div>
              <div id="preview-output"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
