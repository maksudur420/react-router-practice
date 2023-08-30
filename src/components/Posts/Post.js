import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
   const {title,body,id}=post;
   const navigate =useNavigate()
   const handleNavigate =()=>{
        navigate(`/post/${id}`)
   }
    return (
        <div>
            <p>{title}</p>
            <p>{body}</p>
            <Link to={`/post/${id}`}>
                <button >Post Details</button>
            </Link>
            <button onClick={handleNavigate}>Show Details</button>
        </div>
    );
};

export default Post;