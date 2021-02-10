import React, {useEffect} from 'react';
import {getUsers} from "../../store/users-reducer";
import User from "./User";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../../store/store";
import {UserType} from "../../types/entities";

const UsersContainer = () => {
  const dispatch = useDispatch()
  const users = useSelector<StateType, Array<UserType>>(state => state.users)
  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (<div>
    {users.map(user => <User key={user.id} user={user}/>)}

  </div>);
};

export default UsersContainer;



