import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App'
import store from './store'
import './index.css'

const render = () => {
    fancyLog();
    return ReactDOM.render(<App />, document.getElementById('root'));
}
render();
store.subscribe(render);


function fancyLog() {
    console.log(store.getState());
  }
