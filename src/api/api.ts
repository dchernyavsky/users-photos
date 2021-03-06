import axios from 'axios'
import {AlbumType, PhotoType, UserType} from '../types/entities'

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  withCredentials: true
})

export const usersAPI = {
  getUsers() {
    return axiosInstance.get<Array<UserType>>('users')
  }
}

export const albumsAPI = {
  getAlbums(userId: string) {
    return axiosInstance.get<Array<AlbumType>>(`albums?userId=${userId}`)
  }
}

export const photosAPI = {
  getPhotos(albumId: string) {
    return axiosInstance.get<Array<PhotoType>>(`photos?albumId=${albumId}`)
  },
  getPhoto(photoId: string) {
    return axiosInstance.get<PhotoType>(`photos/${photoId}`)
  }
}