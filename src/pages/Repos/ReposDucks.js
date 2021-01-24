import { createReducer } from 'redux-starter-kit';

import { ReposApi } from './ReposApi';
import { handleError } from '../../utlis/handleError';

export const reposModule = 'repos';
const LOADING = `${reposModule}/LOADING`;
const REPOS = `${reposModule}/REPOS`;

const initialState = {
  loading: false,
  repos: []
};

export default createReducer(initialState, {
  [LOADING]: (state, action) => {
    state.loading = action.loading;
  },
  [REPOS]: (state, action) => {
    state.repos = action.repos;
  }
});

export const getRepos = visibility => async dispatch => {
  try {
    dispatch({ type: LOADING, loading: true });
    const { data } = await ReposApi.getRepos(visibility);
    dispatch({ type: REPOS, repos: data });
  } catch (error) {
    handleError(error, 'Не удалось загрузить репозитории!');
  } finally {
    dispatch({ type: LOADING, loading: false });
  }
};