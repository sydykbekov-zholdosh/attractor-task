import React from 'react';
import ListIcon from '@material-ui/icons/List';
import GroupIcon from '@material-ui/icons/Group';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import paths from '../../_helpers/paths';

export const sideBarItems = [
  {
    title: 'Профиль',
    path: paths.profile,
    icon: <AccountBoxIcon fontSize="small"/>
  },
  {
    title: 'Репозитории',
    path: paths.repositories,
    icon: <ListIcon fontSize="small"/>
  },
  {
    title: 'Другие пользователи',
    path: paths.users,
    icon: <GroupIcon fontSize="small"/>
  }
];