import React from 'react';
import _ from 'lodash';
import './ChatWindow.css';

import store from '../../store'
import Header from '../../components/header/Header';
import Chats from '../chats/Chats'
import MessageInput from '../messageInput/MessageInput'

const ChatWindow = ({activeUserId}) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId]
    const activeMsgs = state.messages[activeUserId]
    const {typing} = state

    return (
        <div className="ChatWindow">
            <Header user={activeUser}/>
            <Chats messages={_.values(activeMsgs)}/>
            <MessageInput value={typing}/>
        </div>
    );
}

export default ChatWindow;