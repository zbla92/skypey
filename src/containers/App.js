import React from 'react';
import _ from 'lodash'

import './App.css'
import Sidebar from '../components/sidebar/Sidebar';
import Main from '../components/main/Main'
import store from '../store'



const App = () => {
    const {contacts, user, activeUserId} = store.getState()
    return (
        <div className="App">
            <Sidebar contacts={_.values(contacts)}/>
            <Main user={user} activeUserId={activeUserId}/>
        </div>
    );

}
export default App;