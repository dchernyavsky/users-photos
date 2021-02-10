import React, {FunctionComponent} from 'react'
import style from './User.module.css'
import {UserType} from '../../types/entities'

interface OwnProps {
  user: UserType
}

type Props = OwnProps;

const User: FunctionComponent<Props> = (props) => {
  return (<div className={style.user}>
    {props.user.name}
  </div>)
}

export default User