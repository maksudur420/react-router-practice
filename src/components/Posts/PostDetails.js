import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const detail =useLoaderData();
    const {title,body,userId} = detail;
    const navigate =useNavigate();
    const handleNavigate =()=>{
        navigate(`/friend/${userId}`);
    }

    return (
        <div>
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={handleNavigate}>Show Author</button>
        </div>
    );
};

export default PostDetails;