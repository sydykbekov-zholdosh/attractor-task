import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import LoadingButton from '@material-ui/lab/LoadingButton';
import DoneAllIcon from '@material-ui/icons/DoneAll';

import Form from '../../_ui/Form/Form';
import Input from '../../_ui/Input/Input';
import { StyledProfile } from './ProfileStyle';
import { authModule } from '../Auth/AuthDucks';
import { profileModule, updateProfile } from './ProfileDucks';

function Profile({ user, loading, updateProfile }) {
  return (
    <StyledProfile className="my3">
      <Paper className="p3">
        <img src={user['avatar_url']} alt="avatar"/>
        <Form
          initialValues={user}
          onSubmit={updateProfile}
        >
          <Input
            disabled
            name="login"
            label="Логин"
          />
          <Input
            name="name"
            label="Имя"
          />
          <Input
            disabled
            name="email"
            label="Электронная почта"
          />
          <Input
            name="company"
            label="Компания"
          />
          <Input
            name="location"
            label="Местоположение"
          />
          <Input
            multiline
            rows={5}
            name="bio"
            label="Описание профиля"
          />
          <Button
            fullWidth
            color="secondary"
            target="_blank"
            variant="contained"
            href={user['html_url']}
            children="Перейти на профиль в GitHub"
          />
          <div className="right-align mt2">
            <LoadingButton
              type="submit"
              pending={loading}
              color="primary"
              variant="contained"
              pendingPosition="start"
              startIcon={<DoneAllIcon/>}
              children="Сохранить"
            />
          </div>
        </Form>
      </Paper>
    </StyledProfile>
  );
}

export default connect(
  state => ({
    user: state[authModule].user,
    loading: state[profileModule].loading
  }),
  {
    updateProfile
  }
)(Profile);
