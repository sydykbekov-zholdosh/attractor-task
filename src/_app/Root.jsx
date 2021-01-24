import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import NotificationContainer from 'react-notifications-component';

import paths from '../_helpers/paths';
import ProtectedRoute from './ProtectedRoute';
import Page404 from '../pages/Page404/Page404';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import { getUser, authModule, auth } from '../pages/Auth/AuthDucks';
import routerProps, { sideBarPaths } from '../_helpers/routerProps';

function Root({ auth, getUser, ...props }) {
  const { search, pathname } = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(search);
    const code = params.get('code');
    if (code) {
      auth(code);
    } else if (pathname !== paths.login && !code) {
      getUser();
    }
  }, []);

  return (
    <>
      <NotificationContainer className="left-0 top-0"/>
      <Header/>
      <div className="flex grow1">
        {props.user && <Route exact path={sideBarPaths} component={SideBar}/>}
        <Switch>
          <ProtectedRoute exact {...props} {...routerProps.login} />
          <ProtectedRoute exact {...props} {...routerProps.profile} />
          <ProtectedRoute exact {...props} {...routerProps.repos} />
          <ProtectedRoute exact {...props} {...routerProps.users} />
          <ProtectedRoute exact {...props} {...routerProps.userRepos} />
          <Route component={Page404}/>
        </Switch>
      </div>
    </>
  );
}

export default connect(
  state => ({
    user: state[authModule].user,
    loading: state[authModule].loading
  }),
  {
    auth,
    getUser
  }
)(Root);
