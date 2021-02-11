import React, {FunctionComponent} from 'react'
import {PhotoType} from '../../types/entities'
import style from './Photo.module.css'

interface OwnProps {
  photo: PhotoType
}

type Props = OwnProps;

const Photo: FunctionComponent<Props> = (props) => {
  return (<div className={style.imgContainer}>
      {
        props.photo.url && <img className={style.img} src={props.photo.url} alt=""/>
      }
    </div>
  )
}

export default Photo
