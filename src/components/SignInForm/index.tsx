import { yupResolver } from '@hookform/resolvers/yup';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { fetchSignIn } from '../../store/ducks/user/actionCreators';
import { Wrapper } from './styles';

export interface ISignInFormData {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const SignInForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISignInFormData>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<ISignInFormData> = (data) => {
    dispatch(fetchSignIn(data));
  };
  return (
    <Wrapper>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='form-container'
        data-testid='form-container'>
        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field }) => <Input placeholder='e-mail' type='text' {...field} />}
        />
        <Typography variant='body2' className='form-error-text'>
          {errors.email ? errors.email.message : null}
        </Typography>
        <Controller
          name='password'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <Input
              type='password'
              placeholder='password'
              margin='none'
              {...field}
              error={!errors.email?.message}
            />
          )}
        />
        <Typography variant='body2' className='form-error-text'>
          {errors.password ? errors.password.message : null}
        </Typography>

        <input type='submit' value='Sign In' />
      </form>
    </Wrapper>
  );
};

export default SignInForm;
