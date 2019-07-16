import React from 'react';
import './main.css';
import Empty from '../empty/Empty';
import ChatWindow from '../../containers/chatWindow/ChatWindow'

const Main = ({user, activeUserId}) => {
    const renderMainContent = () => {
        if(!activeUserId) {
            return <Empty user={user} activeUserId={activeUserId}/>
        } else {
            return <ChatWindow activeUserId={activeUserId}/>
        }
    }
    return (
        <div className='Main'>{renderMainContent()}</div>
    );
}
export default Main;

