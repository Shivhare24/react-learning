import React, { Component } from 'react'
import HigherOrderComponent from './HigherOrderComponent'

class ClickCounter extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <button onClick={incrementCount}>
                Clicked {count} times
            </button>
        )
    }
}

export default HigherOrderComponent(ClickCounter)
