import styled from 'styled-components';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Colors from '../ThemeProvider/Colors';
import Shapes from '../ThemeProvider/Shapes';

export const Wrapper = styled.div`
  width: 290px;
  min-height: 100%;
  padding-top: 80px;
  border-right: 1px solid #e0e0e0;
  margin-right: 30px;
`;

export const useStyles = makeStyles({
  paper: {
    width: 261,
    height: 98,
    marginBottom: 50,
    display: 'flex',
    alignItems: 'center',
    borderRadius: Shapes.cardBorderRadius,
    boxShadow: 'none',
    background: 'linear-gradient(90deg, #F1F1F1 20%, #FFFFFF 100.96%)'
  },
  avatar: {
    width: 48,
    height: 48,
    marginLeft: 20
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 14
  },
  menu: { marginTop: 20, border: 'none' },
  menuItem: {
    width: 278,
    height: 40,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: Shapes.cardBorderRadius,
    '& .MuiSvgIcon-root': {
      color: Colors.action
    },
    '& .MuiTypography-root': {
      color: Colors.action
    },

    '&:hover ': {
      '& .MuiSvgIcon-root': {
        color: Colors.secondary
      },
      '& .MuiTypography-root': {
        color: Colors.secondary
      }
    }
  },
  icon: {
    minWidth: 35
  },
  link: {
    color: Colors.action
  }
});
