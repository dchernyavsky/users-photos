import axios from "axios";
import {UserType} from "../types/entities";

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const usersAPI = {
  getUsers() {
    return axiosInstance.get<Array<UserType>>('users')
  }
}