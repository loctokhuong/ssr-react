import React from 'react';

const UserList = ({ users }) => {
  // const dispatch = useDispatch();
  // const userState = useSelector((state) => state.users);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  // if (userState.status === 'loading') {
  //   return userState.status;
  // }
  // if (userState.error) {
  //   return userState.error;
  // }

  return (
    <div>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
