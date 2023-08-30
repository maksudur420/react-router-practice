import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post'

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h1>A lot of fb post is here :{posts.length} </h1>
            {
                 posts.map(post =><Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;