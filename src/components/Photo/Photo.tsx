import React, {FunctionComponent} from 'react'
import {PhotoType} from '../../types/entities'
import style from './Photo.module.css'

interface OwnProps {
  photo: PhotoType
}

type Props = OwnProps;

const Photo: FunctionComponent<Props> = (props) => {
  return (
    <div className={style.photo}>
      <h4>{props.photo.title}</h4>
      {props.photo.thumbnailUrl && <img className={style.photoPreview} src={props.photo.thumbnailUrl} alt=''/>}
    </div>)
}

export default Photo