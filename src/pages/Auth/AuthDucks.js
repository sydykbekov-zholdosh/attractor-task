import { createReducer } from 'redux-starter-kit';

import { AuthApi } from './AuthApi';
import { GitHub } from '../../config';
import paths from '../../_helpers/paths';
import { handleError } from '../../utlis/handleError';
import { history } from '../../_helpers/history';

/**
 * Constants
 */

export const authModule = 'login';
export const USER = `${authModule}/USER`;
const LOGOUT = `${authModule}/LOGOUT`;
const LOADING = `${authModule}/LOADING`;

/**
 * Reducer
 */

const initialState = {
  user: null,
  loading: false
};

export default createReducer(initialState, {
  [USER]: (state, action) => {
    state.user = action.user;
  },
  [LOADING]: (state, action) => {
    state.loading = action.loading;
  },
  [LOGOUT]: state => {
    state.user = null;
  }
});

/**
 * Actions
 */

export const auth = code => async dispatch => {
  try {
    dispatch({ type: LOADING, loading: true });
    let params =
      `code=${code}` +
      `&client_id=${GitHub.clientId}` +
      `&client_secret=${GitHub.secretId}`;
    const response = await AuthApi.auth(params);
    if (response.data.access_token) {
      localStorage.setItem('accessToken', response.data.access_token);
      await dispatch(getUser());
    } else {
      history.push(paths.login);
      handleError(response, 'Не удалось авторизоваться!');
    }
  } catch (error) {
    history.push(paths.login);
    handleError(error, 'Не удалось авторизоваться!');
  } finally {
    dispatch({ type: LOADING, loading: false });
  }
};

export const getUser = () => async dispatch => {
  try {
    dispatch({ type: LOADING, loading: true });
    const response = await AuthApi.getUser();
    if (response.data.id) {
      dispatch({ type: USER, user: response.data });
    } else {
      handleError(response, 'Не удалось авторизоваться!');
    }
  } catch (error) {
    handleError(error, 'Не удалось авторизоваться!');
  } finally {
    dispatch({ type: LOADING, loading: false });
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem('accessToken');
  dispatch({ type: LOGOUT });
};
