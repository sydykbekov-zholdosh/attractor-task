import React from 'react';
import { useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';

import { columns } from './columns';
import { usersModule } from './UsersDucks';
import MuiTable from '../../_ui/Table/MuiTable';
import { history } from '../../_helpers/history';
import SearchPanel from './SearchPanel/SearchPanel';

function Users() {
  const { users } = useSelector(state => state[usersModule]);

  return (
    <div className="my3 fullWidth">
      <Paper className="p3">
        <SearchPanel/>
        <MuiTable
          columns={columns}
          data={users}
          onRowClick={({ login }) => history.push(`/users/${login}/repositories`)}
        />
      </Paper>
    </div>
  );
}

export default Users;