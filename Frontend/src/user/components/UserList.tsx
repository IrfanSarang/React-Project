import './UserList.css';
import UserItems from './UserItems';

const UserList = props => {
  if (props.items.length === 0){
    return (<div className=''>
      <h2>No Users found.</h2>
    </div>)
  }

  return <ul>
    {props.items.map(user =>{
     <UserItems key={user.id} id={user.is} image={user.image} name={user.name} placeCounr={user.places}/>
    })}
  </ul>
};


export default UserList;
