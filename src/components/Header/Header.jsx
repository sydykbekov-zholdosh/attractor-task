import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import paths from '../../_helpers/paths';
import { Logo, StyledToolbar } from './HeaderStyle';
import { authModule, logout } from '../../pages/Auth/AuthDucks';

function HeaderWithoutAuth() {
  const { user } = useSelector(state => state[authModule]);
  const dispatch = useDispatch();

  return (
    <AppBar position="static" elevation={0} color="transparent">
      <StyledToolbar>
        <div className="grow1">
          <Logo to={paths.profile}>
            <span id="attractor">Attractor</span>
            <span id="task">Task</span>
          </Logo>
        </div>
        <ul>
          {user && (
            <li onClick={() => dispatch(logout())}>
                <span className="icon-span">
                  <ExitToAppIcon className="icon"/>
                </span>
              Выйти
            </li>
          )}
        </ul>
      </StyledToolbar>
    </AppBar>
  );
}

export default HeaderWithoutAuth;
