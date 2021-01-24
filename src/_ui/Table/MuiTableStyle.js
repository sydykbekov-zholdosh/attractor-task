import styled from 'styled-components';
import { TableRow } from '@material-ui/core';

import Colors from '../../components/ThemeProvider/Colors';

export const StyledTableRow = styled(TableRow)`
  cursor: pointer;
  
  &:hover {
    background-color: ${Colors.border};
  }
`;