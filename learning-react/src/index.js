import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = () => {
    return (
        <div>
            <p>The current count is 0.</p>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
