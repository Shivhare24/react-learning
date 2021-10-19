import React from "react";

const HigherOrderComponent = WrappedComponent => {
    class HigherOrderComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }

        incrementCount = () => {
            console.log(this.state.count)
            this.setState(prevState => {
                return { count: prevState.count+1 }
            })
        }

        render(){
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount}/>
        }
        
    }
    return HigherOrderComponent
}

export default HigherOrderComponent;