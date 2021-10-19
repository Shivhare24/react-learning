import React from 'react'

export default function ListRendering() {
    const names = ['bruce', 'clark', 'diana']
    const nameList = names.map((name, index)=> <h2 key={index}>{name}</h2>)
    // return (
    //     <div>
    //         <div>{names[0]}</div>
    //         <div>{names[1]}</div>
    //         <div>{names[2]}</div>
    //     </div>
    // )

    return (
        <div>{nameList}</div>
    )
}
