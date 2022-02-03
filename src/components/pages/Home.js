import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Page.css';
import './Home.css';

function Home() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          `https://jsonplaceholder.typicode.com/users/`,
        )
        setUsers(result.data);
      };
      fetchData();
    },[])

    return (
        <div className='container__page'>
        <h1>Liste des Utilisateurs</h1>
            {users.map(user => (
                <div key={user.id} className="container__email">
                    <Link className="email__link" to={`/users/${user.id}`}>{user.email}</Link>
                </div>
            ))

            }
        </div>
    )
}

export default Home;
