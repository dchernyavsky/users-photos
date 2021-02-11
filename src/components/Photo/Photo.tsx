import React, {FunctionComponent} from 'react'
import {PhotoType} from '../../types/entities'

interface OwnProps {
  photo: PhotoType
}

type Props = OwnProps;

const Photo: FunctionComponent<Props> = (props) => {
  return (<div>
      {
        props.photo.url && <img src={props.photo.url} alt=""/>
      }
    </div>
  )
}

export default Photo
