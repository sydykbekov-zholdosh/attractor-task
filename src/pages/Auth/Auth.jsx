import React from 'react';
import { useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import GitHubIcon from '@material-ui/icons/GitHub';
import LoadingButton from '@material-ui/lab/LoadingButton';

import { GitHub } from '../../config';
import { authModule } from './AuthDucks';
import { StyledTitle } from './AuthStyle';
import { baseURL } from '../../_helpers/service';

const AUTH_URL = `${baseURL}login/oauth/authorize?client_id=${GitHub.clientId}&scope=user,repo&redirect_uri=http://localhost:3000/login`;

function Auth() {
  const { loadingAuth } = useSelector(state => state[authModule]);

  return (
    <Paper className="p4 m-auto center">
      <StyledTitle children="Авторизация"/>
      <LoadingButton
        href={AUTH_URL}
        pending={loadingAuth}
        color="secondary"
        variant="contained"
        pendingPosition="start"
        startIcon={<GitHubIcon/>}
        children="Войти с помощью GitHub"
      />
    </Paper>
  );
}

export default Auth;
