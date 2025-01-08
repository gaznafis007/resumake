const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];
const awardSlice = createSlice({
    name: 'awards',
    initialState,
    reducers:{
        addAward: (state) =>{
            let newAward = {
                id: Date.now(),
                title: '',
                issuer: '',
                date: '',
                description: ''
            }
            state.push(newAward)
        },
        updateAward: (state, {payload}) =>{
            const {id, field, value} = payload;
            const Award = state?.find(item => item?.id == id)
            if(Award){
                Award[field] = value
            }
        },
        removeAward: (state,{payload}) =>{
            return state?.filter((Award) => Award?.id != payload)
        }
    }
})

export const {addAward, updateAward, removeAward} = awardSlice.actions
export default awardSlice.reducer