const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    expertise: '',
    comfortable: '',
    familiar: ''
}
const skillSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        updateSkills: (state, {payload}) =>{
            const {field, value} = payload;
            state[field] = value
        },
    }
})

export const {updateSkills} = skillSlice.actions
export default skillSlice.reducer