import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleAddClick = () => {
        setCount(count + 1);
    };

    const handleRemoveClick = () => {
        setCount(count - 1);
    };

    return (
        <>
            <button onClick={handleAddClick}>+1</button>
            <p>{count}</p>
            <button onClick={handleRemoveClick}>-1</button>
        </>
    );
};

export default Counter;
