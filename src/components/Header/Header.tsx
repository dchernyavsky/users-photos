import React, {FunctionComponent} from 'react'
import {NavLink} from 'react-router-dom'
import containerStyle from '../../common/styles/Container.module.css'
import style from './Header.module.css'

const Header: FunctionComponent = () => {

  return (<NavLink to='/'>
    <div className={`${containerStyle.container} ${style.container}`}>
      <h1>
        User Photos Viewer
      </h1>
    </div>

  </NavLink>)
}

export default Header
