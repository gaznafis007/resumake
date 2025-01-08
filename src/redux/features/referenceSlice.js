const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];
const referenceSlice = createSlice({
    name: 'references',
    initialState,
    reducers:{
        addReference: (state) =>{
            let newReference = {
                id: Date.now(),
                name: '',
                position: '',
                org: '',
                email: '',
                phone: ''
            }
            state.push(newReference)
        },
        updateReference: (state, {payload}) =>{
            const {id, field, value} = payload;
            const reference = state.find(item =>item?.id == id)
            if(reference){
                reference[field] = value
            }
        },
        removeReference: (state, {payload}) =>{
            return state.filter(item => item?.id != payload)
        }
    }
})

export const {addReference, updateReference, removeReference} = referenceSlice.actions
export default referenceSlice.reducer