import React from 'react';
import './Empty.css';

const Empty = ({user}) => {

    // Some of the names have Mr. and Mrs. next to them so I dont want to render just Mr. instead I want to render Mr. Milan or Dr. Spyke
    const get_first_name = (full_name) => {
        const arr_of_names = full_name.split(" ");
        if(arr_of_names[0].indexOf(".") > -1){
            return arr_of_names[0] + " " + arr_of_names[1]
        } else return arr_of_names[0]
    }

    const {name, profile_pic, status} = user;
    const first_name = get_first_name(name)

    return (
        <div className="Empty">
            <h1 className="Empty_name">Welcome, {first_name} </h1>
            <img src={profile_pic} alt={user.id} className="Empty_img" />
            <p className='Empty_status'>
                <b>Status:</b> {status}
            </p>
            <button className="Empty_btn">Start a conversation</button>
            <p className="Empty_info">
                Search for someone to start chatting with or go to Contacts to see who
                is available
            </p>
        </div>
    );
}
export default Empty;