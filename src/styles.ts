import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

export const Centered = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: 'translate(-50%, -50%)';
`;

export const LoadingProgress = styled(CircularProgress)`
  color: #2286aa;
`;
