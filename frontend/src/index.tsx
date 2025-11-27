import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {store} from './store'
import {Provider} from 'react-redux'
import {RouterProvider} from "react-router";
import router from "./routes";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);
