import React from 'react'
import '../AdminHome/AdminHome.css'
import { useSelector } from 'react-redux';
// import Noticeboard from '../Noticeboard'
 
 
const AdminHome = () => {
    const { emp }  = useSelector(state => state.authState);

  return (
   
    <div>
      <h1>Welcome   <p>{emp.name}</p></h1>
   
      {/* <Noticeboard/> */}
    </div>
   
 
   
  )
}
 
export default AdminHome