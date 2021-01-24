import { createReducer } from 'redux-starter-kit';

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
      "name": formData['name'],
      "company": formData['company'],
      "location": formData['location'],
      "bio": formData['bio']
    };
    const response = await ProfileApi.update(data);
    console.log('RESPONSE', response);
  } catch (error) {
    handleError(error, 'Не удалось сохранить данные пользователя');
  } finally {
    dispatch({ type: LOADING, loading: false });
  }
};
