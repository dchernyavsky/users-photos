import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {StateType} from '../../store/store'
import {PhotoType} from '../../types/entities'
import containerStyle from '../../common/styles/Container.module.css'
import {NavLink, useParams} from 'react-router-dom'
import Preloader from '../Preloader/Preloader'
import styles from '../User/User.module.css'
import {getPhoto} from '../../store/photo-reducer'
import Photo from './Photo'

const PhotosPreviewContainer = () => {
  const photoId = useParams<{ photoId: string }>()
  const isFetching = useSelector<StateType, boolean>(state => state.loading.isFetching)
  const dispatch = useDispatch()
  const photo = useSelector<StateType, PhotoType>(state => state.photo)

  useEffect(() => {
    dispatch(getPhoto(photoId.photoId))
  }, [dispatch, photoId.photoId])

  return (<>
    <NavLink to={`../photos/${photo.albumId}`}>
      <h4 className={styles.title}>Up To Photos</h4>
    </NavLink>
    <h2 className={styles.title}>
      {photo.title}
    </h2>
    <div className={containerStyle.container}>
      {
        isFetching
          ? <Preloader/>
          : <Photo photo={photo}/>
      }
    </div>
  </>)
}

export default PhotosPreviewContainer



