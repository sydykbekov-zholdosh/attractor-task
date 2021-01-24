import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';

import Colors from '../ThemeProvider/Colors';

export const Logo = styled(Link)`
  font-size: 36px;
  font-weight: bold;
  & span {
    font-family: Segoe UI, sans-serif;
  }
  & #attractor {
    color: ${Colors.linkHovered};
  }
  & #task {
    color: ${Colors.secondary};
  }
`;

export const StyledToolbar = styled(Toolbar)`
  padding: 0 !important;
  height: 100px; 
  justify-content: center;
  background: linear-gradient(90deg, #FFFFFF 0%, #ECEAFF 51%, #FFFFFF 100.96%); 
  border-radius: 30px;
  }

  & ul {
    display: inline-flex;
    margin-top: 23px;
    margin-right: 4px;
    padding: 0;
  }

  & ul li {
    list-style: none;
    font-size: 14px;
    margin-left: 40px;
    color: ${Colors.action};
  }

  & ul li .icon-span {
    vertical-align: top;
    margin-right: 5px;
  }

  & ul li .icon-span .icon {
    font-size: 16px;
    color: ${Colors.secondary};
  }

  & ul li:hover,
  & ul li:hover .icon {
    cursor: pointer;
    color: ${Colors.primary};
  }
`;