import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './exhibitor.css'
import { Chip } from '@mui/material';
import data from "../data.json"
function createData(
  color: string,
  name: string,
  price: string,
  description: number
) {
  return {color, name, price, description };
}

export default function InfoTable({ language }) {
    const { exhibitor } = data[language];
    const rows = [
        createData(exhibitor.whiteColor,exhibitor.whiteStand,exhibitor.whiteStandSize , exhibitor.whiteStandTerms ),
        createData(exhibitor.blueColor, exhibitor.blueStand,exhibitor.blueStandSize , exhibitor.blueStandTerms ),
      ];
  return (
    <TableContainer >
      <Table sx={{ minWidth: 450 }} aria-label="caption table">
        <caption>{exhibitor.standInclusions}</caption>
        <TableHead>
          <TableRow>
            <TableCell>
                {exhibitor.stand}
            </TableCell>
            <TableCell align="left">{exhibitor.price}</TableCell>
            <TableCell align="left">{exhibitor.description}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
              {row.name}
                
              </TableCell>
              <TableCell align="left"><Chip label="" color="primary" /> </TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
