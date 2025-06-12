import React from 'react'
import UserList from '../components/UserList';

const Users: React.FC = () => {
  const USERS = [{
    id: 'u1', name: 'Irfan Sarang', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx7932TNla9vTmP29NVDuIx9hrTm-qT9UNXA&s', places: 1
  }];
  return (
    <UserList items={USERS} />
  )
}

export default Users;
