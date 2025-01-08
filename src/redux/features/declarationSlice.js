const { createSlice } = require("@reduxjs/toolkit")

const initialState= {
    description: '',
    image: '',
    name: '',
    address: '',
    date: '',
}
const declarationSlice = createSlice({
    name: 'declaration',
    initialState,
    reducers:{
        updateDeclaration: (state, {payload}) =>{
            const {field, value} = payload
            state[field] = value
        }
    }
})

export const {updateDeclaration} = declarationSlice.actions;
export default declarationSlice.reducer