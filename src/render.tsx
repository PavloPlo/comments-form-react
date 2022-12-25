import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
export let renderEntireTree = (state:any)=>{
    root.render(
        <React.StrictMode>
            <App state={state}/>
    </React.StrictMode>
);
}
