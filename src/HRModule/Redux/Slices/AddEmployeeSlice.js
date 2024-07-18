import {
  SET_FIELD,
  SET_FILE,
  RESET_FORM,
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAILURE,
} from '../Actions/Addemployeeactions'
 
const initialState = {
  dateOfJoining: '',
  employeeType: '',
  emp_id: '',
  designation: '',
  reporting_to: '',
  role: '',
  firstName: '',
  phoneNumber: '',
  aadharNo: '',
  ifscCode: '',
  address: '',
  zipCode: '',
  profilePicture: null,
  email: '',
  gender: '',
  accountNo: '',
  panNo: '',
  city: '',
  state: '',
  graduationCertificate: null,
  loading: false,
  error: null,
};
 
const addEmployeeReducer = (state =  initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
 
    case SET_FILE:
      return {
        ...state,
        [action.payload.name]: action.payload.file,
      };
 
    case RESET_FORM:
      return initialState;
 
    case ADD_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
 
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
 
    case ADD_EMPLOYEE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
 
    default:
      return state;
  }
};
 
export default addEmployeeReducer;