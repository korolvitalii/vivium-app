import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { authMe, setLoadingStatus } from './store/ducks/user/actionCreators';
import { selectIsAuth, selectUserLoadingStatus } from './store/ducks/user/selectors';
import { LoadingStatus } from './store/types';
import { Centered, LoadingProgress } from './styles';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loadingStatus = useSelector(selectUserLoadingStatus);
  const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    const email = window.localStorage.getItem('email');
    if (email) {
      dispatch(authMe(email));
    } else {
      dispatch(setLoadingStatus(LoadingStatus.LOADED));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isReady && !isAuth) {
      navigate('/sign-in');
    } else {
      navigate('/');
    }
  }, [isAuth, isReady]);

  if (!isReady) {
    return (
      <Centered>
        <LoadingProgress />
      </Centered>
    );
  }

  return (
    <Routes>
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default App;
