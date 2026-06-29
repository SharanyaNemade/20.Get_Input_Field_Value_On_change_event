import { useState } from "react"

const Counter = () =>{

        const [count,setCount] = useState(0);
        const [rCount, setRCount] = useState(20);

        console.log(count);

    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={() => setCount(count + 1)}>Update Counter</button>
            
            <h2>Counter: {rCount}</h2>
            <button onClick={() => setRCount(rCount - 1)}>Update RCounter</button>
            <br/>
            
        </div>
    )
}

export default Counter;