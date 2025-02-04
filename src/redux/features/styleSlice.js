const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    layout: 'top',
    column: 'single',
    color: {
        
    }
};
const styleSlice = createSlice({
    name: 'styles',
    initialState,
    reducers:{
        colorSelection: (state, {payload}) =>{
            state.color=payload
        },
        layoutSelection: (state, {payload}) =>{
            state.layout = payload
        }
    }
})


export const {layoutSelection, colorSelection} = styleSlice.actions;
export default styleSlice.reducer