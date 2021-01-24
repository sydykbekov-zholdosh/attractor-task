import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
  List,
  Paper,
  Avatar,
  ListItem,
  Typography,
  ListItemIcon
} from '@material-ui/core';
import { sideBarItems } from './SideBarItems';
import { useStyles, Wrapper } from './SideBarStyles';
import { authModule } from '../../pages/Auth/AuthDucks';

const SideBar = () => {
  const classes = useStyles();
  const location = useLocation();
  const { user } = useSelector(state => state[authModule]);

  return (
    <Wrapper>
      <Paper className={classes.paper}>
        <div className="flex">
          <Avatar className={classes.avatar} src={user['avatar_url']}/>
          <div className="ml2">
            <Typography
              color="textPrimary"
              className={classes.userName}
              children={user.name}
            />
            <Typography
              color="secondary"
              children={user.type}
            />
          </div>
        </div>
      </Paper>
      <Typography variant="h5" color="secondary" children="Навигация"/>
      <List className={classes.menu}>
        {sideBarItems.map(({ path, title, icon }, key) => (
          <Link key={key} to={path} style={{ textDecoration: 'none' }}>
            <ListItem
              button
              key={path}
              selected={location.pathname === path}
              className={classes.menuItem}
            >
              <ListItemIcon className={classes.icon} children={icon}/>
              <Typography noWrap children={title}/>
            </ListItem>
          </Link>
        ))}
      </List>
    </Wrapper>
  );
};

export default SideBar;
