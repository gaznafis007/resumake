const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    socialLinks: [],
    description: ''
}
const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateProfile: (state, {payload}) =>{
            const {field, value} = payload;
            state[field] = value
        }
    }
})

export const {updateProfile} = profileSlice.actions
export default profileSlice.reducer