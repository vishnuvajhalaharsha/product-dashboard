// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import  dataReducer  from './components/features/dashboard/dashboardSlice';


const store = configureStore({
  reducer: {
    data: dataReducer
  },
});
console.log('Store created:', store); 

export default store;
