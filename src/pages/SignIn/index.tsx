import { Alert, Button, ButtonGroup, Snackbar, Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Wrapper } from './styles';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import SignInForm from '../../components/SignInForm';
import { useSelector } from 'react-redux';
import { selectErrors } from '../../store/ducks/user/selectors';
import { useEffect, useState } from 'react';

const SignIn: React.FC = () => {
  const errors = useSelector(selectErrors);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  useEffect(() => {
    if (errors) {
      setShowAlert(true);
    }
  }, [errors]);

  const handleOnClose = () => {
    setShowAlert(false);
  };

  return (
    <Wrapper>
      <Paper elevation={0} className='container'>
        <Stack direction='row' alignItems='center' className='sign-in-text-block'>
          <Typography className='sign-in-title' variant='h4'>
            vivium
          </Typography>
          <DisabledByDefaultIcon className='sign-in-title-icon' />
        </Stack>
        <Typography className='sign-in-text' variant='h6'>
          Sign in
        </Typography>
        <SignInForm />
        <ButtonGroup fullWidth>
          <Button className='button-group-button'>Forget password?</Button>
          <Button className='button-group-button'>Sign up</Button>
        </ButtonGroup>

        <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleOnClose}>
          <Alert onClose={handleOnClose} severity='error'>
            Wrong email or password! :(
          </Alert>
        </Snackbar>
      </Paper>
    </Wrapper>
  );
};

export default SignIn;
