import { createSlice } from '@reduxjs/toolkit';
 
const initialState = {
  currentStep: 0,
  employeeDetails: {},
  resignationDetails: {
    resignationSubmittedOn: null,
    leavingDate: null,
    leavingReason: '',
    statementDate: null,
  },
  noticePayDetails: {
    noticeRequired: false,
    noticePeriod: 0,
    noOfDaysServed: 0,
    excessInNotice: 0,
    payrollData: [
      {
        key: '1',
        payrollMonth: 'Aug 2024',
        excessInNotice: '1 days',
      },
    ],
    proratedExcessInNotice: 0,
  },
  workDaysDetails: [
    {
      key: '1',
      payrollmonth: 'January',
      workdays: 25,
      daysworked: 22,
    },
    {
      key: '2',
      payrollmonth: 'February',
      workdays: 25,
      daysworked: 20,
    },
  ],
  leaveEncashmentDetails: [
    {
      key: '1',
      leaveType: 'Earned Leave',
      balance: 5,
      encash: 5,
    },
  ],
  remarks: '',
};
 
const settlementSlice = createSlice({
  name: 'settlement',
  initialState,
  reducers: {
    nextStep(state) {
      if (state.currentStep < 5) {
        state.currentStep += 1;
      }
    },
    previousStep(state) {
      if (state.currentStep > 0) {
        state.currentStep -= 1;
      }
    },
    updateEmployeeDetails(state, action) {
      state.employeeDetails = action.payload;
    },
    updateResignationDetails(state, action) {
      state.resignationDetails = {
        ...state.resignationDetails,
        ...action.payload,
      };
    },
    updateNoticePayDetails(state, action) {
      state.noticePayDetails = {
        ...state.noticePayDetails,
        ...action.payload,
      };
    },
    updateNoticePayPayrollData(state, action) {
      const index = state.noticePayDetails.payrollData.findIndex(
        (item) => item.key === action.payload.key
      );
      if (index !== -1) {
        state.noticePayDetails.payrollData[index] = action.payload;
      }
    },
    updateWorkDaysDetails(state, action) {
      const index = state.workDaysDetails.findIndex(
        (item) => item.key === action.payload.key
      );
      if (index !== -1) {
        state.workDaysDetails[index] = action.payload;
      }
    },
    updateLeaveEncashmentDetails(state, action) {
      const index = state.leaveEncashmentDetails.findIndex(
        (item) => item.key === action.payload.key
      );
      if (index !== -1) {
        state.leaveEncashmentDetails[index] = action.payload;
      } else {
        state.leaveEncashmentDetails.push(action.payload);
      }
    },
    updateRemarks(state, action) {
      state.remarks = action.payload;
    },
    resetSettlement(state) {
      state.currentStep = 0;
      state.employeeDetails = {};
      state.resignationDetails = {
        resignationSubmittedOn: null,
        leavingDate: null,
        leavingReason: '',
        statementDate: null,
      };
      state.noticePayDetails = {
        noticeRequired: false,
        noticePeriod: 0,
        noOfDaysServed: 0,
        excessInNotice: 0,
        payrollData: [
          {
            key: '1',
            payrollMonth: 'Aug 2024',
            excessInNotice: '1 days',
          },
        ],
        proratedExcessInNotice: 0,
      };
      state.workDaysDetails = [
        {
          key: '1',
          payrollmonth: 'January',
          workdays: 25,
          daysworked: 22,
        },
        {
          key: '2',
          payrollmonth: 'February',
          workdays: 25,
          daysworked: 20,
        },
      ];
      state.leaveEncashmentDetails = [
        {
          key: '1',
          leaveType: 'Earned Leave',
          balance: 5,
          encash: 5,
        },
      ];
      state.remarks = '';
    },
  },
});
 
export const {
  nextStep,
  previousStep,
  updateEmployeeDetails,
  updateResignationDetails,
  updateNoticePayDetails,
  updateNoticePayPayrollData,
  updateWorkDaysDetails,
  updateLeaveEncashmentDetails,
  updateRemarks,
  resetSettlement,
} = settlementSlice.actions;
 
export default settlementSlice.reducer;