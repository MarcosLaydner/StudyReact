import React from 'react'
import Child from './Child'

export default props => {
    const notifyExit= place => alert(`Ok, you can go to ${props.place}`)

    return (
        <div>
            <Child notifyExit={notifyExit}/>
        </div>
    )
}