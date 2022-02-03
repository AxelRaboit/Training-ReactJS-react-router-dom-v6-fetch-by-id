import React, { useState, useEffect } from 'react';
import './Page.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Profile() {

    const [data, setData] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        )
        setData(result.data);
      };
      fetchData();
    },[])

    return (
        <div className='container__page'>
            <div key={data.id}>
                <p>Id: {data.id}</p>
                <p>Name: {data.name}</p>
                <p>Username: {data.username}</p>
                <p>Phone: {data.phone}</p>
            </div>
        </div>
    )
}

export default Profile;
