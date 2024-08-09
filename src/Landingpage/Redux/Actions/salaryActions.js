// import axios from 'axios';
// import {
//     getsalaryRequest,
//     getsalarySuccess,
//     getsalaryReject
// } from '../../../HRModule/Redux/Slices/SalarySlice'




// export const getSalary = (emp_id) => async (dispatch) => {
//     try {
//         dispatch(getsalaryRequest());
//         const { data } = await axios.get(`http://localhost:8000/api/v1/hr/getSalarybyEmployee/:${emp_id}`);
//         dispatch(getsalarySuccess(data));
//     } catch (error) {
//         dispatch(getsalaryReject(error.response.data.message));
//     }
// };