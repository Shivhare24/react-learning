import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogged: true
        }
    }
    
    // render() {
    //     if(this.state.isLogged){
    //         return <div>Welcome KNOWN</div>
    //     }
    //     else {
    //         return <div>Welcome UNKNOWN</div>
    //     }
    // }

    // render (){
    //     let message
    //     if (this.state.isLogged){
    //         message = <div>Welcome KNOWN</div>
    //     }
    //     else {
    //         message = <div>Welcome UNKNOWN</div>
    //     }
    //     return <div>{message}</div>
    // }

    // render (){
    //     return this.state.isLogged?
    //         (
    //         <div>Welcome KNOWN</div>
    //         ):
    //         (
    //         <div>Welcome UNKNOWN</div>
    //         )
    // }

    render(){
        return this.state.isLogged && <div>Welcome KNOWN</div>
    }
}
