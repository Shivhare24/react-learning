import React, { Component } from 'react';

export class Message extends Component {
    constructor(){
        super();
        this.state = {
            message: 'Welcome Aliens'
        };
    }

    handleMessage(){
        this.setState({
            message: "thank you"
        })
    }

    render () {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={()=>this.handleMessage()}>Click Me</button>
            </div>
        )
    }
}