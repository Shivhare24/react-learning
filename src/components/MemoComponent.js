import React from 'react'

function MemoComponent() {
    return (
        <div>
            Memo Component
        </div>
    )
}

export default React.memo(MemoComponent)
