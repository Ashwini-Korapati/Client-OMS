// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const token = localStorage.getItem('authToken');

// export const fetchHolidays = createAsyncThunk('leaveCalendar/fetchHolidays', async () => {
//   const response = await fetch('http://localhost:8000/api/v1/hr/holidays', {
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${token}`,  
//       'Content-Type': 'application/json',
//     },
//       // body: JSON.stringify(response),
//          credentials: 'include'
//   });
//   if (!response.ok) {
//     throw new Error('Failed to fetch holidays');
//   }
//   const data = await response.json();
//   // console.log(data)
//   return data.holidays;
// });

// const leaveCalendarSlice = createSlice({
//   name: 'leaveCalendar',
//   initialState: {
//     holidays:null,   
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchHolidays.pending, (state , action) => {
//         state.loading = true;
//       })
//       .addCase(fetchHolidays.fulfilled, (state, action) => {
//         state.loading = false;
//         state.holidays = action.payload;
//       })
//       .addCase(fetchHolidays.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message; 
//       });
//   },
// });

// export const selectHolidays = (state) => state.leaveCalendar.holidays || []; 

// export default leaveCalendarSlice.reducer;


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const token = localStorage.getItem('authToken');

// export const fetchHolidays = createAsyncThunk('leaveCalendar/fetchHolidays', async () => {
//   const response = await fetch('http://localhost:8000/api/v1/hr/holidays', {
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json',
      
//     },
//     credentials: 'include',
    
    
//   });

//   if (!response.ok) {
//     throw new Error('Failed to fetch holidays');
//   }

//   const data = await response.json();
//   // console.log('API Response:', data); 
//   return data.holidaysByMonth; 
// });

// const leaveCalendarSlice = createSlice({
//   name: 'leaveCalendar',
//   initialState: {
//     holidays: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchHolidays.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchHolidays.fulfilled, (state, action) => {
//         // console.log('Fulfilled action payload:', action.payload); // Debugging the payload
//         state.loading = false;
//         state.holidays = action.payload;
//       })
//       .addCase(fetchHolidays.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const selectHolidays = (state) => state.leaveCalendar.holidays || [];

// export default leaveCalendarSlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { environment } from '../../../../environment';

// const token = localStorage.getItem('authToken');

// const MAX_RETRIES = 3;

// export const fetchHolidays = createAsyncThunk('leaveCalendar/fetchHolidays', async (_, { rejectWithValue }) => {
//   let retries = 0;

//   const fetchHolidaysData = async () => {
//     try {
//       const { response } = await axios.get(`${environment.APIURL}hr/holidays`, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         withCredentials: true,
//       });
//       return response.holidaysByMonth;
//     } catch (error) {
//       if (error.response && error.response.status === 429 && retries < MAX_RETRIES) {
//         retries += 1;
//         const retryAfter = error.response.headers['retry-after'] || 1;
//         await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
//         return fetchHolidaysData();
//       } else {
//         return rejectWithValue(error.response ? error.response.data.message : error.message);
//       }
//     }
//   };

//   return await fetchHolidaysData();
// });

// const leaveCalendarSlice = createSlice({
//   name: 'leaveCalendar',
//   initialState: {
//     holidays: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchHolidays.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchHolidays.fulfilled, (state, action) => {
//         state.loading = false;
//         state.holidays = action.payload;
//       })
//       .addCase(fetchHolidays.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const selectHolidays = (state) => state.leaveCalendar.holidays || [];

// export default leaveCalendarSlice.reducer;




import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { environment } from '../../../../environment';

const token = localStorage.getItem('authToken');

const MAX_RETRIES = 3;

export const fetchHolidays = createAsyncThunk('leaveCalendar/fetchHolidays', async (_, { rejectWithValue }) => {
  let retries = 0;

  const fetchHolidaysData = async () => {
    try {
      const { response } = await axios.get(`${environment.APIURL}hr/holidays`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      return response.holidaysByMonth;
    } catch (error) {
      if (error.response && error.response.status === 429 && retries < MAX_RETRIES) {
        retries += 1;
        const retryAfter = error.response.headers['retry-after'] || 1;
        await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
        return fetchHolidaysData();
      } else {
        return rejectWithValue(error.response ? error.response.data.message : error.message);
      }
    }
  };

  return await fetchHolidaysData();
});

const leaveCalendarSlice = createSlice({
  name: 'leaveCalendar',
  initialState: {
    holidays: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHolidays.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHolidays.fulfilled, (state, action) => {
        state.loading = false;
        state.holidays = action.payload;
      })
      .addCase(fetchHolidays.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectHolidays = (state) => state.leaveCalendar.holidays || [];

export default leaveCalendarSlice.reducer;
