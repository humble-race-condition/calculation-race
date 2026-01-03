import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {storeConfiguration} from './config/store/storeConfiguration'
import {Provider} from 'react-redux'
import {RouterProvider} from "react-router";
import router from "./config/routes/routes";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={storeConfiguration}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);
