import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const Users = () => {

    const[users, setUsers] = useState([]);

    useEffect(() => {

        const getUsers = async() => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUsers(data);
        }
        getUsers();

    }, [])
    

    return (
        <div className='userList'>
                {users.map(user =>
                    <Link to={`${user.id}`} key={user.id}>{user.name}</Link>)}
        </div>
    );
};

export default Users;