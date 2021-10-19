import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    handleCounter(){
        this.setState({
            count: this.state.count + 1
        })
    }

    handleCounterIncrement(){
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                {/* <button onClick={()=> this.handleCounter()}>Counter</button> */}
                <button onClick={()=> this.handleCounterIncrement()}>Counter</button>
            </div>
        )
    }
}
