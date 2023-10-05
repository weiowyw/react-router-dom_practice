import React, {useState} from 'react';

const Posts = () => {

    const[posts, setPosts] = useState([]);

    const getPosts = async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
    }
    getPosts();

    return (
        <div>
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
};

export default Posts;