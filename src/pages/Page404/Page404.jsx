import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { CssBox } from './Page404Style';
import paths from '../../_helpers/paths';

function Page404() {
  return (
    <CssBox>
      <div className="container">
        <div className="error">404</div>
        <div className="oops">Упс, Страница не найдена!</div>
        <div className="not-found">
          Возможно вы ввели не правильный адрес, <br/>
          или страница была удалена.
        </div>
        <Link to={paths.profile}>
          <Button variant="contained" color="secondary" children="На главную"/>
        </Link>
      </div>
    </CssBox>
  );
}

export default Page404;
