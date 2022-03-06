import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { selectItems, selectLoadingStatus } from '../../store/ducks/items/selectors';
import { IBook, LoadingStatus } from '../../store/types';
import {
  compareDates,
  filterByCategory,
  getComparator,
  stableSort,
} from '../../utils/table-helpers';
import TableHeader from '../TableHead';
import TableToolbar from '../TableToolbar';
import { CircularProgressBox, StyledTableCell, StyledTableRow, Wrapper } from './styles';

export interface Data {
  author: string;
  chapters: number;
  group: string;
  name: string;
  testament: string;
  timestamp: string;
}

export type Order = 'asc' | 'desc';

const EnhancedTable: React.FC = () => {
  const skeletonArray = Array(5).fill('');
  const loadingStatus = useSelector(selectLoadingStatus);
  const isLoading = loadingStatus === LoadingStatus.LOADING;

  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('author');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [startTime, setStartTime] = React.useState<moment.Moment | null>(null);
  const [endTime, setEndTime] = React.useState<moment.Moment | null>(null);
  const [filterBy, setFilterBy] = React.useState<keyof Omit<IBook, 'abbrev' | 'chapters'> | ''>('');
  const [filterValue, setFilterValue] = React.useState('');
  const items = useSelector(selectItems);

  let rows: IBook[] | undefined;
  if (filterValue === 'All') {
    rows = items;
  } else if (startTime && endTime) {
    rows = compareDates(items, startTime, endTime);
  } else if (!!filterValue) {
    rows = filterByCategory(items, filterBy, filterValue);
  } else {
    rows = items;
  }

  useEffect(() => {
    setPage(0);
  }, [filterValue]);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const rowsLength = rows ? rows.length : 0;
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowsLength) : 0;
  return (
    <Wrapper>
      <TableToolbar
        setStartTime={setStartTime}
        setEndTime={setEndTime}
        startTime={startTime}
        endTime={endTime}
        numSelected={0}
        setFilterBy={setFilterBy}
        setFilterValue={setFilterValue}
      />
      <TableContainer>
        <Table className='table' aria-labelledby='tableTitle' size='medium'>
          <TableHeader
            numSelected={0}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={() => {}}
            onRequestSort={handleRequestSort}
            rowCount={rows?.length || 0}
          />
          <TableBody data-testid='table-body'>
            {isLoading &&
              skeletonArray.map((item, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component='th' scope='row'>
                    <Skeleton />
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <Skeleton />
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <Skeleton />
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <Skeleton />
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <Skeleton />
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <Skeleton />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            {rows && (
              <>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow
                        hover
                        data-testid='table-row'
                        aria-checked={undefined}
                        tabIndex={-1}
                        key={row.name}
                        selected={undefined}
                        className='table-row'>
                        <TableCell className='table-cell' align='left'>
                          {row.author}
                        </TableCell>
                        <TableCell className='table-cell' align='left'>
                          {row.name}
                        </TableCell>
                        <TableCell className='table-cell' align='left'>
                          <CircularProgressBox>
                            <CircularProgress
                              variant='determinate'
                              className='circular-progress-gray'
                              thickness={4}
                              value={100}
                            />
                            <CircularProgress
                              variant='determinate'
                              thickness={4}
                              value={row.chapters}
                            />
                            <div className='circular-progres-typography'>
                              <Typography variant='caption' component='div' color='text.secondary'>
                                {row.chapters}
                              </Typography>
                            </div>
                          </CircularProgressBox>
                        </TableCell>
                        <TableCell className='table-cell' align='left'>
                          {row.group}
                        </TableCell>
                        <TableCell className='table-cell' align='left'>
                          {row.testament}
                        </TableCell>
                        <TableCell className='table-cell' align='left'>
                          {row.timestamp}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={rows?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Wrapper>
  );
};
export default EnhancedTable;
