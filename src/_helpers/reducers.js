import authReducer, { authModule } from '../pages/Auth/AuthDucks';
import profileReducer, { profileModule } from '../pages/Profile/ProfileDucks';
import reposReducer, { reposModule } from '../pages/Repos/ReposDucks';
import usersReducer, { usersModule } from '../pages/Users/UsersDucks';
import userReposReducer, { userReposModule } from '../pages/UserRepos/UserReposDucks';

export default {
  [authModule]: authReducer,
  [profileModule]: profileReducer,
  [reposModule]: reposReducer,
  [usersModule]: usersReducer,
  [userReposModule]: userReposReducer
};
