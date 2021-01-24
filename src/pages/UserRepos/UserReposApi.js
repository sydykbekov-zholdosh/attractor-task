import axios from 'axios';

export const UserReposApi = {
  getUserRepos: username => axios.get(
    `api:users/${username}/repos`
  )
};