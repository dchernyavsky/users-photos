import React, {useEffect} from 'react'
import {getPhotos} from '../../store/photos-reducer'
import Photo from './Photo'
import {useDispatch, useSelector} from 'react-redux'
import {StateType} from '../../store/store'
import {PhotoType} from '../../types/entities'
import containerStyle from '../../common/styles/Container.module.css'
import {useParams} from 'react-router-dom'
import Preloader from '../Preloader/Preloader'

const PhotosContainer = () => {
  const albumId = useParams<{ albumId: string }>()
  const isFetching = useSelector<StateType, boolean>(state => state.loading.isFetching)
  const dispatch = useDispatch()
  const photos = useSelector<StateType, Array<PhotoType>>(state => state.photos)
  useEffect(() => {
    dispatch(getPhotos(albumId.albumId))
  }, [dispatch, albumId.albumId])

  return (<div className={containerStyle.container}>
    {
      isFetching
        ? <Preloader/>
        : photos.map(photo => <Photo photo={photo}/>)
    }
  </div>)
}

export default PhotosContainer



