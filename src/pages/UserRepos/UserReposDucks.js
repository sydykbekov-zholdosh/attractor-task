import { createReducer } from 'redux-starter-kit';

import { UserReposApi } from './UserReposApi';
import { handleError } from '../../utlis/handleError';

export const userReposModule = 'userRepos';
const LOADING = `${userReposModule}/LOADING`;
const USER_REPOS = `${userReposModule}/USER_REPOS`;

const initialState = {
  loading: false,
  repos: []
};

export default createReducer(initialState, {
  [LOADING]: (state, action) => {
    state.loading = action.loading;
  },
  [USER_REPOS]: (state, action) => {
    state.repos = action.repos;
  }
});

export const getUserRepos = username => async dispatch => {
  try {
    dispatch({ type: LOADING, loading: true });
    const response = await UserReposApi.getUserRepos(username);
    dispatch({ type: USER_REPOS, repos: response.data });
  } catch (error) {
    handleError(error, `Не удалось загрузить репозитории пользователя ${username}`);
  } finally {
    dispatch({ type: LOADING, loading: false });
  }
};