import { createSlice } from '@reduxjs/toolkit'
export const signupSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        addUser: (state, action)=>{
            state.users = [...state.users, action.payload]
        } 
    }
})

export const {addUser} = signupSlice.actions
export default signupSlice.reducer