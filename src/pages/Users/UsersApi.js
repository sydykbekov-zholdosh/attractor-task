import axios from 'axios';

export const UsersApi = {
  getUsers: username => axios.get(
    `api:search/users?q=${username}`
  )
}