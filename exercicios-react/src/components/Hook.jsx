import React, {useState, useEffect} from 'react'

export default props => {

    let [counter, setCounter] = useState(100)
    let [status, setStatus] = useState('Even')

    useEffect(() => {
        counter % 2 === 0 ? setStatus('Even') :
        setStatus('Odd')

    }, [counter])

    return (
        <div>
            <h1>{counter}</h1>
            <h2>{status}</h2>
            <button onClick={() => setCounter(counter +1)}>Inc</button>
        </div>
    )
}