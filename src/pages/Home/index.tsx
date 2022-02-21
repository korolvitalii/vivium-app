import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../store/ducks/items/actionCreators';
import EnhancedTable from '../../components/Table';
import { Wrapper } from './styles';
import { selectIsAuth } from '../../store/ducks/user/selectors';
import Button from '@mui/material/Button';
import { logOut } from '../../store/ducks/user/actionCreators';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchItems());
      setOpen(true);
    }
  }, [isAuth]);

  const handleClick = () => {
    dispatch(logOut());
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <Button onClick={handleClick} className='button-logout'>
        Logout
      </Button>
      <EnhancedTable />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          Success :)
        </Alert>
      </Snackbar>
    </Wrapper>
  );
};

export default Home;
