import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <>
            <div className="counter-container">
                <p className="count">{count}</p>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={handleIncrement}>Increment</button>
            </div>
        </>
    )
}

export default Counter