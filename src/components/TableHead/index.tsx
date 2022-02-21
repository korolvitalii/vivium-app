import React from 'react';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import { Data, Order } from '../Table';

import { TableHeadWrapper } from './styles';

interface TableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'author',
    numeric: false,
    disablePadding: false,
    label: 'AUTHOR',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'NAME',
  },
  {
    id: 'chapters',
    numeric: false,
    disablePadding: false,
    label: 'CHAPTERS',
  },
  {
    id: 'group',
    numeric: false,
    disablePadding: false,
    label: 'GROUP',
  },
  {
    id: 'testament',
    numeric: false,
    disablePadding: false,
    label: 'TESTAMENT',
  },
  {
    id: 'timestamp',
    numeric: false,
    disablePadding: false,
    label: 'DATE',
  },
];

const EnhancedTableHead: React.FC<TableProps> = ({ order, orderBy, onRequestSort }) => {
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHeadWrapper>
      <TableRow className='table-row'>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            className='table-cell'>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHeadWrapper>
  );
};
export default EnhancedTableHead;
