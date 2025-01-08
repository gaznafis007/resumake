const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];
const interestSlice = createSlice({
    name: 'interests',
    initialState,
    reducers:{
        addInterest: (state) =>{
            let newInterest = {
                id: Date.now(),
                name: '',
                description: ''
            }
            state.push(newInterest)
        },
        updateInterest: (state, {payload}) =>{
            const {id, field, value} = payload;
            const interest = state?.find(item => item?.id == id)
            if(interest){
                interest[field] = value
            }
        },
        removeInterest: (state,{payload}) =>{
            return state?.filter((interest) => interest?.id != payload)
        }
    }
})

export const {addInterest, updateInterest, removeInterest} = interestSlice.actions
export default interestSlice.reducer