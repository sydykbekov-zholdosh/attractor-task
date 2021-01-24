import { createReducer } from 'redux-starter-kit';

import { USER } from '../Auth/AuthDucks';
import { ProfileApi } from './ProfileApi';
import { handleError } from '../../utlis/handleError';

export const profileModule = 'profile';
const LOADING = `${profileModule}/LOADING`;

const initialState = {
  loading: false
};

export default createReducer(initialState, {
  [LOADING]: (state, action) => {
    state.loading = action.loading;
  }
});

export const updateProfile = formData => async dispatch => {
  try {
    dispatch({ type: LOADING, loading: true });
    const data = {
      name: formData['name'],
      company: formData['company'],
      location: formData['location'],
      bio: formData['bio']
    };
    const response = await ProfileApi.update(data);
    dispatch({ type: USER, user: response.data });
  } catch (error) {
    handleError(error, 'Не удалось сохранить данные пользователя');
  } finally {
    dispatch({ type: LOADING, loading: false });
  }
};
