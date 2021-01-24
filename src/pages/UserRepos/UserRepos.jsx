import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import Item from '../Repos/Item';
import { Paper } from '@material-ui/core';
import { getUserRepos, userReposModule } from './UserReposDucks';


function UserRepos({ loading, repos, getUserRepos, match }) {
  useEffect(() => {
    getUserRepos(match.params.username);
  }, []);

  if (loading) {
    return (
      <div className="fullWidth flex items-center justify-center">
        <CircularProgress/>
      </div>
    );
  }

  return (
    <div className="my3 fullWidth fullHeight">
      <Paper className="p2 fullHeight">
        {repos.map((r, key) => <Item {...r} key={key}/>)}
      </Paper>
    </div>
  );
}

export default connect(
  state => ({
    loading: state[userReposModule].loading,
    repos: state[userReposModule].repos
  }),
  {
    getUserRepos
  }
)(UserRepos);