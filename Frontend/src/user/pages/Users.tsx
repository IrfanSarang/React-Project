import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Irfan Sarang',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGuSHh5VSk4cKmvOrP1JhOymzxRhW78C-0Q&s',
      places: 3
    }]

    return <UserList items={USERS}/>;
}

export default Users;
