// // import { useSelector } from 'react-redux';
// // import { Navigate } from 'react-router-dom';

// // export default function ProtectedRoute({ children }) {
// //   const { isAuthenticatedemployee, isAuthenticateduser } = useSelector(state => state.authState);

// //   if (!isAuthenticatedemployee && !isAuthenticateduser) {
// //     return <Navigate to="/login" />
// //   }

// //   if (isAuthenticateduser && isAuthenticateduser) {
// //     return <Navigate to="/" />;
// //   }

// //   return children;
// // }

// import { useSelector } from 'react-redux';
// import {Navigate} from 'react-router-dom';
// // import Loader from '../layouts/Loader';
// // import { useNavigate, Link } from 'react-router-dom';

// export default function ProtectedRoute ({children, isAdmin ,isHR , isEmployee}) {
//     const { isAuthenticated , isAuthenticatedemployee , isAuthenticateduser ,emp , loading} = useSelector(state => state.authState)
//     // const navigate = useNavigate();
//     if(!isAuthenticated && !loading) {
//         // return navigate("/")
//         return <Navigate to='/'></Navigate>
//     }

//     if(isAuthenticatedemployee) {
//         if(isHR === true  && emp.role !== 'admin') {
//             // return navigate("/")
//             return <Navigate to='/'></Navigate>
//         }
//         return children;
//     }



   
// }


import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, role }) => {
  const { isAuthenticatedemployee, user } = useSelector((state) => state.authState);

  if (!isAuthenticatedemployee) {
    return <Navigate to="/login" />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
