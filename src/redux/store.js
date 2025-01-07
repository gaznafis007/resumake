
const { configureStore } = require('@reduxjs/toolkit');
import experiencesReducer from './features/experienceSlice.js'
import educationReducer from './features/educationSlice.js'
import profileReducer from './features/profileSlice.js'

export const store = configureStore({
    reducer:{
        profile: profileReducer,
        experiences: experiencesReducer,
        educations: educationReducer,
    }
})