import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import arr from '../data/employee';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Employees() {
  return (
    <Grid item xs={6}>
        <Typography variant="h3" gutterBottom>
            Employee Details
        </Typography>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 900 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell >Level</StyledTableCell>
                    <StyledTableCell >Designation</StyledTableCell>
                    <StyledTableCell >Action</StyledTableCell>
                    {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
                </TableRow>
                </TableHead>
                <TableBody>
                {arr.map((row) => (
                    <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                        {row.Name}
                    </StyledTableCell>
                    <StyledTableCell >{row.Level}</StyledTableCell>
                    <StyledTableCell >{row.designation}</StyledTableCell>
                    <StyledTableCell >Make this person SME</StyledTableCell>
                    {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Grid>
  );
}