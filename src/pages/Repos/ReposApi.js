import axios from 'axios';

export const ReposApi = {
  getRepos: visibility => axios.get(
    `api:user/repos?visibility=${visibility}`,
    { headers: { Accept: 'application/vnd.github.v3+json' } }
  )
};