import React, { Component } from 'react'

export class DeStructuringInClassComponent extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.fname} {this.props.lname} </h1>
            </div>
        )
    }
}
