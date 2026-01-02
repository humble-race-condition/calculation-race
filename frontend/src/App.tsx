import React, {useState} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from "./config/store/store";
import {increment} from "./counterSlice";

function App() {

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="App">
            <div>
                Hello there
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', height: '50px' }}>
                {count}
            </div>
            <button type="button" onClick={() => dispatch(increment())}>
                Click me!
            </button>
        </div>
    );
}

export default App;
