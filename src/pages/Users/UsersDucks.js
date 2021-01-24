import { createReducer } from 'redux-starter-kit';
import { handleError } from '../../utlis/handleError';
import { UsersApi } from './UsersApi';

export const usersModule = 'users';
const LOADING = `${usersModule}/LOADING`;
const USERS = `${usersModule}/USERS`;

const initialState = {
  loading: false,
  users: [],
  total: 0
};

export default createReducer(initialState, {
  [LOADING]: (state, action) => {
    state.loading = action.loading;
  },
  [USERS]: (state, action) => {
    state.users = action.items;
    state.total = action.total_count;
  }
});

export const getUsers = username => async dispatch => {
  try {
    dispatch({ type: LOADING, loading: true });
    const response = await UsersApi.getUsers(username);
    console.log(response);
    dispatch({ type: USERS, ...response.data });
  } catch (error) {
    handleError(error, 'Не удалось загрузить пользователей!');
  } finally {
    dispatch({ type: LOADING, loading: false });
  }
};