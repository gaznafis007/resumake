const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    expertise: [],
    comfortable: [],
    familiar: []
}
const skillSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {

    }
})


export default skillSlice.reducer