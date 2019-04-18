import React, { Component } from 'react';

export class RenderInput extends Component {
    render() {

        return (
            <div id="render-section" dangerouslySetInnerHTML = {this.props.output.__html}></div>
        );
    }
}

export default RenderInput;