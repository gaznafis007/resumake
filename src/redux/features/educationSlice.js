import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const educationSlice = createSlice({
    name: 'educations',
    initialState,
    reducers:{
        addEducation: (state) =>{
            const education = {
                id: Date.now(),
                degree: '',
                school: '',
                city: '',
                country: '',
                startDate: '',
                endDate: ''
            }
            state.push(education)
        },
        updateEducation: (state, {payload}) =>{
            const {id, field, value} = payload;
            const education = state?.find((edu) => edu?.id == id);
            if(education){
                education[field] = value
            }
        },
        removeEducation: (state, {payload}) =>{
            return state.filter((edu) => edu?.id != payload)
        }
    }
})
export const {addEducation, updateEducation, removeEducation} = educationSlice.actions
export default educationSlice.reducer