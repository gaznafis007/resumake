import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name:'',
    email:'',
    token: '' 
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        loginUser: (state, {payload}) =>{
            const {name, email} = payload;
            state.name = name;
            state.password = email;

        },
        logOut: (state) =>{
            state.name='';
            state.email =''
        }
    }
})

export const {loginUser, logOut} = userSlice.actions;
export default userSlice.reducer