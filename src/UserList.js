import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUserList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <div className='card-container'>
        {userList.map(user => (
            <Card key={user.id} name ={user.name}  userName = {user.username} email={user.email} phone={user.phone}/>
        ))}
      </div>
    </div>
  );
};

export default UserList;
