import React, {FunctionComponent} from 'react'
import {AlbumType} from '../../types/entities'
import style from './Album.module.css'

interface OwnProps {
  album: AlbumType
}

type Props = OwnProps;

const Album: FunctionComponent<Props> = (props) => {
  return (
    <div className={style.album}>
      <h2>{props.album.title}</h2>
    </div>)
}

export default Album