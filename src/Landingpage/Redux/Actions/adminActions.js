import {
    addEmployee,
    addEmployeeFail,
    addEmployeeSuccess
} from "../slices/adminSlice"
import axios from 'axios';

export const createNewEmployee  =  formData1 => async (dispatch) => {   

    try {  
        dispatch(addEmployee()) 
        const { data }  =  await axios.post(`http://localhost:8000/api/v1//hr/addEmployee`, formData1);
        dispatch(addEmployeeSuccess(data))
    } catch (error) {
        //handle error
        dispatch(addEmployeeFail(error.response.data.message))
    }
    
}