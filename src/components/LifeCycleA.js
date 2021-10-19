import React, { Component } from 'react'

//Component Mounting lifecycle methods
class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Initial state'
        }
        console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }

    handleChange = () =>{
        this.setState({
            message: 'changed state'
        })
    }
    
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.handleChange}>Change Status</button>
            </div>
        )
    }
}

export default LifeCycleA
