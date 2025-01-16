const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    layout: 'top',
    column: 'single',
    color: 'zinc-800'
};
const styleSlice = createSlice({
    name: 'styles',
    initialState,
    reducers:{
        colorSelection: (state, {payload}) =>{
            state.color=payload
        }
    }
})


export const {colorSelection} = styleSlice.actions;
export default styleSlice.reducer