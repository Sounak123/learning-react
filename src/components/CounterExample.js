import React, { useState } from 'react'

export const CounterExample = () => {
    //[variable, changing method] = useState([initialValue])
    const [count, setCount] = useState(0);


    return (
        <div>
            <h1>{count}</h1>
            <h1 onClick = {() => setCount(count+1)}>Plus</h1>
            <h1 onClick = {() => setCount(count-1)}>Minus</h1>
        </div>
    )
}
