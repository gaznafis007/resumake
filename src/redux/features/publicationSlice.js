const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];
const publicationSlice = createSlice({
  name: "publications",
  initialState,
  reducers:{
    addPublication: (state) =>{
        let newPublication = {
            id: Date.now(),
            title: '',
            publisher:'',
            date: '',
            description: ''
        }
        state.push(newPublication)
    },
    updatePublication:(state, {payload}) =>{
        const {id, field, value} = payload;
        const item = state.find((piece) => piece?.id == id);
        if(item){
            item[field] = value
        }
    },
    removePublication: (state, {payload}) =>{
        return state?.filter(item => item?.id != payload)
    }
  }
});


export const {addPublication, updatePublication, removePublication} = publicationSlice.actions;
export default publicationSlice.reducer
