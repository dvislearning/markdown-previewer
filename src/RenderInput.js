import React, { Component } from 'react';

export class RenderInput extends Component {
    render() {
        return (
            <div id="render-section">{this.props.input}</div>
        );
    }
}

export default RenderInput;