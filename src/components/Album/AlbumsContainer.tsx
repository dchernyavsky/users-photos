import React, {FunctionComponent, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {StateType} from '../../store/store'
import {AlbumType} from '../../types/entities'
import containerStyle from '../../common/styles/Container.module.css'
import Album from './Album'
import {getAlbums} from '../../store/albums-reducer'
import {NavLink, useParams} from 'react-router-dom'
import Preloader from '../Preloader/Preloader'
import styles from '../User/User.module.css'

const AlbumsContainer: FunctionComponent = () => {
  const userId = useParams<{ userId: string }>()
  const isFetching = useSelector<StateType, boolean>(state => state.loading.isFetching)
  const dispatch = useDispatch()
  const albums = useSelector<StateType, Array<AlbumType>>(state => state.albums)

  useEffect(() => {
    dispatch(getAlbums(userId.userId))
  }, [dispatch, userId.userId])

  return (<>
    <NavLink to={`../users`}>
      <h4 className={styles.title}>Up To Users</h4>
    </NavLink>
    <h2 className={styles.title}>Select Album:</h2>
    <div className={containerStyle.container}>
      {
        isFetching
          ? <Preloader/>
          : albums.map(album => {
            return <NavLink
              to={`/photos/${album.id}`}
              key={album.id}
            >
              <Album album={album}/>
            </NavLink>
          })
      }
    </div>
  </>)
}

export default AlbumsContainer
