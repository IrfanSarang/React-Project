import './UserList.css';
import UserItems from './UserItems';
import Card from '../../shared/components/UIElement/Card';

interface User {
  id: string;
  image: string;
  name: string;
  places: number;
}

interface UserListProps {
  items: User[];
}

const UserList: React.FC<UserListProps> = props => {
  if (props.items.length === 0){
    return (<div className=''>
      <Card >
      <h2>No Users found.</h2>
      </Card>
    </div>
    );
  }

  return <ul className='users-list'>
    {props.items.map((user) =>{
      return(
     <UserItems key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places}/>)
    })}
  </ul>
};


export default UserList;
