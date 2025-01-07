const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];
const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers:{
    addCourse: (state) =>{
        let newCourse = {
            id: Date.now(),
            title: '',
            institute: '',
            city: '',
            country: '',
            startDate: '',
            endDate: '',
            description: ''
        }
        state.push(newCourse)
    },
    updateCourse:(state, {payload}) =>{
        const {id, field, value} = payload;
        const item = state.find((piece) => piece?.id == id);
        if(item){
            item[field] = value
        }
    },
    removeCourse: (state, {payload}) =>{
        return state?.filter(item => item?.id != id)
    }
  }
});


export const {addCourse, updateCourse, removeCourse} = courseSlice.actions;
export default courseSlice.reducer
