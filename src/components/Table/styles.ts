import { TableRow } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fafafa;
  .table {
    width: 95%;
    margin: 0 auto;
    border-collapse: separate;
    border-spacing: 0px 0.8rem;
    .MuiTableCell-root:first-child {
      padding-left: 2rem;
    }
  }
  .table-row {
    border: 5rem solid transparent;
    -webkit-box-shadow: 0px 0px 11px -5px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 0px 11px -5px rgba(66, 68, 90, 1);
    box-shadow: 0px 0px 11px -5px rgba(66, 68, 90, 1);
    height: 5rem;
  }
  .MuiTableCell-root {
    padding: 1rem 0;
  }
  .circular-progres-typography {
    top: 21px;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledTableCell = styled(TableCell)`
  head {
    background-color: #000000;
    color: white;
  }
  body {
    font-size: 1rem;
  }
`;

export const StyledTableRow = styled(TableRow)`
  height: 5rem;
`;

export const CircularProgressBox = styled.div`
  position: relative;
  width: 40px;
  height: 20px;
  margin: 0px 15px;
  margin-bottom: 18px;
  & .MuiCircularProgress-root {
    position: absolute;
  }
  .circular-typography {
    top: 0;
    left: 20px;
    bottom: 0;
    right: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .circular-progress-gray {
    color: #bababa;
  }
`;
