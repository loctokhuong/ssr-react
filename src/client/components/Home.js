import React from 'react';
import UserList from './UserList';
import { fetchUsers } from '../slices/userSlice';
import { connect } from 'react-redux';

const Home = (props) => {
  // const dispatch = useDispatch();
  // const userState = useSelector((state) => state.users);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <div>
      <h1>Home page</h1>
      <UserList users={props.users.data} />
    </div>
  );
};

export default connect((state) => {
  return { users: state.users };
})(Home);

export const fetchData = (store) => {
  return store.dispatch(fetchUsers());
};
