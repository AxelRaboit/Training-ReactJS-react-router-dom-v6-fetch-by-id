import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Page.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Profile() {

    const [user, setUser] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        )
        setUser(result.data);
      };
      fetchData();
    },[id])

    return (
        <div className='container__page'>
            <div key={user.id}>
                <p>Id: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Phone: {user.phone}</p>
            </div>
        </div>
    )
}

export default Profile;
