import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import counterApp from "./reducers";

const store=createStore(counterApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const render=()=> {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}
store.subscribe(render);// 구독 (데이터(state를 읽을 수 있게)
render();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
