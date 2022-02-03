import React, { useState, useEffect } from 'react';
import './Page.css';
import './Profile.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import avatar from '../../images/avatar.png';

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
        <div className='container__page profile__page'>
            <div className='container__card' key={user.id}>
                <div className='card'>
                    <img className='profile__picture' src={avatar} alt='picture profile'/>
                    <div className='container__data'>
                        <p><strong>Id:</strong> {user.id}</p>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
