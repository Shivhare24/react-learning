import React from 'react'

// De-Structuring using function params
// export const DestructuringInFunctionalComponent = ({fname, lname}) => {
//     return (
//         <div>
//             <h1>Hello {fname} {lname} </h1>
//         </div>
//     )
// }

//De-Structuring using function body
export const DestructuringInFunctionalComponent = (props) => {
    const { fname, lname } = props
    return (
        <div>
            <h1>Hello {fname} {lname} </h1>
        </div>
    )
}
