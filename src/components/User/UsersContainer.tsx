import React, {useEffect} from 'react'
import {getUsers} from '../../store/users-reducer'
import User from './User'
import {useDispatch, useSelector} from 'react-redux'
import {StateType} from '../../store/store'
import {UserType} from '../../types/entities'
import containerStyle from '../../common/styles/Container.module.css'
import {NavLink} from 'react-router-dom'
import Preloader from '../Preloader/Preloader'
import styles from './User.module.css'

const UsersContainer = () => {
  const dispatch = useDispatch()
  const isFetching = useSelector<StateType, boolean>(state => state.loading.isFetching)
  const users = useSelector<StateType, Array<UserType>>(state => state.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (<>
    <h2 className={styles.title}>Select User:</h2>
    <div className={containerStyle.container}>

      {
        isFetching
          ? <Preloader/>
          : users.map(user => {
            return <NavLink
              key={user.id}
              to={`/albums/${user.id}`}
            >
              <User
                user={user}
              />
            </NavLink>
          })
      }
    </div>
  </>)
}

export default UsersContainer



