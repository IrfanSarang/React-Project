import React from 'react'
import './UserList.css'
import UserItem from './UserItem'
import '../../index.css'
import Card from '../../shared/components/UIElements/Card';


interface Users {
    id: string;
    image: string;
    name: string;
    places: number;
}

interface UsersItemsProps {
    items: Users[];
}

const UserList: React.FC<UsersItemsProps> = props => {
    if (props.items.length === 0) {
        return (
            <div className='center'>
                <Card>
                    <h2>No users found.</h2>
                </Card>
            </div>)
    };
    return <ul className='users-list'>
        {props.items.map(user => {
            return <UserItem
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                placeCount={user.places}

            />
        })}
    </ul>
}
export default UserList;