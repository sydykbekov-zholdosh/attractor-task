import axios from 'axios';

export const ProfileApi = {
  update: data => axios.patch(
    `api:user`, data, { headers: { Accept: 'application/vnd.github.v3+json' } }
  )
};