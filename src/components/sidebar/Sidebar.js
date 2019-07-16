import React from 'react';
import User from '../../containers/User';
import './sidebar.css';

const Sidebar = ({contacts}) => {

    return (
        <aside className="Sidebar">
            {contacts.map(contact => { return <User user={contact} key={contacts.indexOf(contact) + 1} /> })}
        </aside>
    );
};
export default Sidebar;