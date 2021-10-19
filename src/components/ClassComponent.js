import React, { Component } from 'react';

export class Ccomponent extends Component{
    render() {
        return (
            <div>
                <h1>hello {this.props.name} from Class component</h1>
            </div>
        );
    }
}