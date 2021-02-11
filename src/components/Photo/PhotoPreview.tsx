import React, {FunctionComponent} from 'react'
import {PhotoType} from '../../types/entities'
import style from './PhotoPreview.module.css'

interface OwnProps {
  photo: PhotoType
}

type Props = OwnProps;

const PhotoPreview: FunctionComponent<Props> = (props) => {
  return (
    <div className={style.photo}>
      <h4>{props.photo.title}</h4>
      {props.photo.thumbnailUrl && <img className={style.photoPreview} src={props.photo.thumbnailUrl} alt=''/>}
    </div>)
}

export default PhotoPreview