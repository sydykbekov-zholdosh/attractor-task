import axios from 'axios';

export const AuthApi = {
  auth: params => axios.post(`login/oauth/access_token?${params}`),

  getUser: () => axios.get('api:user')
};
