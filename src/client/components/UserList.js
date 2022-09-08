import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../slices/userSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (userState.status === 'loading') {
    return userState.status;
  }
  if (userState.error) {
    return userState.error;
  }

  return (
    <div>
      <div>
        {userState.data.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
