import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../Redux/Actions/userActions'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from './LoadingSpinner';

const AuthWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const { loading, isAuthenticated } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner fullPage />;
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </>
  );
};

export default AuthWrapper;