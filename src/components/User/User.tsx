import React, {FunctionComponent} from 'react'
import {UserType} from '../../types/entities'
import style from './User.module.css'

interface OwnProps {
  user: UserType
}

type Props = OwnProps;

const User: FunctionComponent<Props> = (props) => {
  return (
    <div className={style.user}>
      <h2>{props.user.username}</h2>
      <div>{props.user.name}</div>
    </div>)
}

export default User