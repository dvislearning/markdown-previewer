import React, { Component } from 'react';

class GetInput extends Component {
    render() {
        return (
                <textarea id="editor" autoFocus value={this.props.input} onChange={this.props.onChange}></textarea>
        );
    }
};

export default GetInput;
