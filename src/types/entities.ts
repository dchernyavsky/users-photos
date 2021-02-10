export type UserType = {
  "id": number | null
  "name": string | null
  "username": string | null
  "email": string | null
  "address": {
    "street": string | null
    "suite": string | null
    "city": string | null
    "zipcode": string | null
    "geo": {
      "lat": number | null
      "lng": number | null
    }
  },
  "phone": string | null
  "website": string | null
  "company": {
    "name": string | null
    "catchPhrase": string | null
    "bs": string | null
  }
}

export type AlbumType = {
  "userId": number | null
  "id": number | null
  "title": string | null
}

export type PhotoType = {
  "albumId": number | null
  "id": number | null
  "title": string | null
  "url": string | null
  "thumbnailUrl": string | null
}

export type LoadingType = {
  isFetching: boolean
}