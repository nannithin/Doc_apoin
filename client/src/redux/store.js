import {configureStore} from '@reduxjs/toolkit'
import {LoadingSlice} from './doctorSlice.js';
import { userSlice } from './userSlice.js';

export default configureStore({
    reducer:{
        loading : LoadingSlice.reducer,
        user : userSlice.reducer,
    },
})