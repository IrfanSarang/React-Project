import React from 'react'
import './UserItem.css'
import Avatar from '../../shared/components/UIElements/Avatar';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';

interface UserItemProps {
    id: string;
    image: string;
    name: string;
    placeCount: number;
}

const UserItem: React.FC<UserItemProps> = props => {
    return (
        <li className='user-item'>
            <Card className='user-item__content' style={{padding: 0}}>
                <Link to={`/${props.id}/places`}>
                    <div className='user-item__image'>
                        <Avatar image={props.image} alt={props.name} />
                    </div>
                    <div className='user-item__info'>
                        <h2>{props.name}</h2>
                        <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places  '}</h3>

                    </div>
                </Link>
            </Card>
        </li>
    )
}
export default UserItem;