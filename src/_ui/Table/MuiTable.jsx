import React from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import TableContainer from '@material-ui/core/TableContainer';

import { StyledTableRow } from './MuiTableStyle';

const MuiTable = ({ data, columns, onRowClick }) => {
  return (
    <TableContainer>
      <Table aria-label="a dense table">
        <TableHead>
          <TableRow>
            {columns.map((item, index) => (
              <TableCell
                key={item.Header || `headerCell-${index}`}
                children={item.Header}
              />
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length ? (
            data.map((item, index) => (
              <StyledTableRow
                key={`Row-${index}`}
                onClick={() => {
                  if (onRowClick) {
                    onRowClick(item);
                  }
                }}
              >
                {columns.map((row, index) => (
                  <TableCell
                    key={row.accessor || `Cell-${index}`}
                    children={item[row.accessor]}
                  />
                ))}
              </StyledTableRow>
            ))
          ) : (
            <TableRow>
              <Grid container justify="center" alignItems="center" direction="row" style={{ height: 50 }}>
                <Grid item>
                  <Typography children={'Нет данных'} color="textSecondary"/>
                </Grid>
              </Grid>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
