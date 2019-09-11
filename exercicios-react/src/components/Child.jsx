import React from 'react'

export default props => 
    <div>
        <input value={props.place}/>
        <button onClick={() => props.notifyExit()}>
        
        Leaving
        
        </button>
    </div>