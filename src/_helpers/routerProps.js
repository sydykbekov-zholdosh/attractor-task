import paths from './paths';
import Profile from '../pages/Profile/Profile';
import Auth from '../pages/Auth/Auth';
import Repos from '../pages/Repos/Repos';
import Users from '../pages/Users/Users';
import UserRepos from '../pages/UserRepos/UserRepos';

const routerProps = {
  login: {
    path: paths.login,
    component: Auth,
    withoutHeader: false,
    withoutSideBar: true,
    withoutAuth: true
  },
  profile: {
    path: paths.profile,
    component: Profile
  },
  repos: {
    path: paths.repositories,
    component: Repos
  },
  users: {
    path: paths.users,
    component: Users
  },
  userRepos: {
    path: paths.userRepos,
    component: UserRepos
  }
};

export const sideBarPaths = Object.values(routerProps)
  .filter(item => !item.withoutSideBar)
  .map(item => item.path);

export default routerProps;
