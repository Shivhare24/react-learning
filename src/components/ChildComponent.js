import React from 'react'


//Example for methods as a props
function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
