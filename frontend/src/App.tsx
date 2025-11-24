import React, {useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState<number>(0);
    const addition = () => setValue(prevValue => prevValue + 1);
    return (
        <div className="App">
            <div>
                Hello there
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', height: '500px' }}>
                {value}
            </div>
            <button type="button" onClick={addition}>
                Click me!
            </button>
        </div>
    );
}

export default App;
