import React, { useState } from 'react';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import LoadingButton from '@material-ui/lab/LoadingButton';

import Input from '../../../_ui/Input/Input';
import { getUsers, usersModule } from '../UsersDucks';

function SearchPanel({ loading, total, getUsers }) {
  const [value, setValue] = useState('');

  return (
    <div>
      <div className="flex mb2">
        <Input
          withoutForm
          value={value}
          placeholder="Имя пользователя"
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="ml2"/>
        <LoadingButton
          pending={loading}
          color="primary"
          variant="contained"
          pendingPosition="start"
          startIcon={<SearchIcon/>}
          children="Поиск"
          onClick={() => value && getUsers(value)}
        />
      </div>
      <div className="bold mb1">Найдено всего пользователей: {total}</div>
    </div>
  );
}

export default connect(
  state => ({
    loading: state[usersModule].loading,
    total: state[usersModule].total
  }),
  {
    getUsers
  }
)(SearchPanel);