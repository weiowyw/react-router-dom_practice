import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const User = () => {
    const {userId} = useParams();
    const [user, setUser] = useState({ });

    useEffect(() => {

        const getUser = async() => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            const data = await res.json();
            setUser(data);
        }

        getUser();
    }, [userId])


    return (
        <div>
            <h1>{user.name}</h1>
            <h2>Username: {user.username}</h2>
            <h2>Phone number: {user.phone}</h2>
        </div>
    );
};

export default User;