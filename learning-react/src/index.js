import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = () => {
    const [count, setCount] = useState(10)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(count = 0)
    }

    return (
        <div>
            <p>The current count is {count}.</p>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
