import React, {useEffect} from 'react'
import {getPhotos} from '../../store/photos-reducer'
import PhotoPreview from './PhotoPreview'
import {useDispatch, useSelector} from 'react-redux'
import {StateType} from '../../store/store'
import {PhotoType} from '../../types/entities'
import containerStyle from '../../common/styles/Container.module.css'
import {NavLink, useParams} from 'react-router-dom'
import Preloader from '../Preloader/Preloader'
import styles from '../User/User.module.css'

const PhotosPreviewContainer = () => {
  const albumId = useParams<{ albumId: string }>()
  const isFetching = useSelector<StateType, boolean>(state => state.loading.isFetching)
  const dispatch = useDispatch()
  const photos = useSelector<StateType, Array<PhotoType>>(state => state.photos)

  useEffect(() => {
    dispatch(getPhotos(albumId.albumId))
  }, [dispatch, albumId.albumId])

  return (<>
    <h2 className={styles.title}>Select Photo:</h2>
    <div className={containerStyle.container}>
      {
        isFetching
          ? <Preloader/>
          : photos.map(photo => {
            return (
              <NavLink key={photo.id} to={`../photo/${photo.id}`}>
                <PhotoPreview photo={photo}/>
              </NavLink>
            )
          })
      }
    </div>
  </>)
}

export default PhotosPreviewContainer



