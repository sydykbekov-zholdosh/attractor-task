import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Row from '../../_ui/Row/Row';

function Item({ name, html_url, owner }) {
  return (
    <Paper className="p3 mb2">
      <Row
        label={name}
        children={
          <Button
            fullWidth
            href={html_url}
            size="small"
            target="_blank"
            color="secondary"
            variant="contained"
            className="left-align"
            children="Перейти на репозиторий"
          />
        }
      />
      <div className="mt2"/>
      <Row
        label={owner['login']}
        children={
          <Button
            fullWidth
            href={owner['html_url']}
            size="small"
            target="_blank"
            color="secondary"
            variant="contained"
            className="left-align"
            children="Перейти на профиль пользователя"
          />
        }
      />
    </Paper>
  );
}

export default Item;