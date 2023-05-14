import React, { useEffect } from 'react';
import UserList from '../components/UserList';
import { fetchUsers } from '../slices/userSlice';
import { connect, useDispatch } from 'react-redux';

const Home = (props) => {
  const dispatch = useDispatch();
  // const userState = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h1>Home page</h1>
      <h3>User list:</h3>
      <UserList users={props.users.data} />
    </div>
  );
};

const fetchData = (store) => {
  return store.dispatch(fetchUsers());
};

export default {
  fetchData,
  component: connect((state) => {
    return { users: state.users };
  })(Home),
};
