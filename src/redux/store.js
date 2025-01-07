
const { configureStore } = require('@reduxjs/toolkit');
import experiencesReducer from './features/experienceSlice.js'
import educationReducer from './features/educationSlice.js'

export const store = configureStore({
    reducer:{
        experiences: experiencesReducer,
        educations: educationReducer,
    }
})