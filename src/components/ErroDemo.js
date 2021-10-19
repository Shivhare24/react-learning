import React from 'react'

export default function ErroDemo({name}) {
    if(name === 'Joker'){
        throw new Error('not a hero')
    }
    return (
        <div>
            {name}
        </div>
    )
}
