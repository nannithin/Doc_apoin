import { createSlice } from "@reduxjs/toolkit";

export const LoadingSlice = createSlice({
    name : "loading",
    initialState : {
        loading : false
    },
    reducers : {
        showLoading: (state) => {
            state.loading = true
        },
        hideLoading: (state) => {
            state.loading = false
        }
    }
})

export const {showLoading,hideLoading} = LoadingSlice.actions;