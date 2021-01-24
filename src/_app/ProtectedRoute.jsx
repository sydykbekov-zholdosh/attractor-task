import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import paths from '../_helpers/paths';
import PageLoader from '../_ui/PageLoader/PageLoader';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps => {
        if (rest.withoutAuth && rest.path !== paths.login) {
          return <Component {...routeProps} />;
        }

        if (rest.loading) {
          return <PageLoader/>;
        }

        if (!rest.withoutAuth && rest.user === null) {
          return <Redirect to={paths.login}/>;
        }

        if (rest.user && rest.path === paths.login) {
          return <Redirect to={paths.profile}/>;
        }

        return <Component {...routeProps} />;
      }}
    />
  );
};

export default ProtectedRoute;
