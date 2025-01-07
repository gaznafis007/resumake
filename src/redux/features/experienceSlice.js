const { createSlice } = require("@reduxjs/toolkit");

const initialState = []

const experienceSlice = createSlice({
    name: 'experiences',
    initialState,
    reducers: {
        addExperience: (state) =>{
            const newExperiences = {
                id: Date.now(),
            title: '',
            company: '',
            city: '',
            country: '',
            startDate: '',
            endDate: ''
            }
            state.push(newExperiences)
        },
        updateExperience: (state, {payload}) =>{
            const {id, field, value} = payload;
            const experience = state.experiences.find((exp) => exp?.id == id);
            if(experience){
                experience[field] = value
            }
        },
        removeExperience: (state,{payload}) =>{
            const id = payload
            state.experiences = state.experiences.filter((exp) => exp.id != id)
        }
    }
})

export const {addExperience, updateExperience, removeExperience} = experienceSlice.actions
export default experienceSlice.reducer