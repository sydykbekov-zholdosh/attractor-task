import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import Item from '../Item';
import { getRepos, reposModule } from '../ReposDucks';

function ReposList({ loading, repos, getRepos, visibility }) {
  useEffect(() => {
    getRepos(visibility);
  }, []);

  if (loading) {
    return (
      <div className="center">
        <CircularProgress/>
      </div>
    );
  }

  return repos.map((r, key) => <Item {...r} key={key}/>);
}

export default connect(
  state => ({
    loading: state[reposModule].loading,
    repos: state[reposModule].repos
  }),
  {
    getRepos
  }
)(ReposList);