import React from 'react';
import './friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name,id,username,email}=friend;
   
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>{email}</p>
            <Link to={`/friend/${id}`}>{username}</Link>
           
        </div>
    );
};

export default Friend;