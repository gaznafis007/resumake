
const { configureStore } = require('@reduxjs/toolkit');
import experiencesReducer from './features/experienceSlice.js'
import educationReducer from './features/educationSlice.js'
import profileReducer from './features/profileSlice.js'
import skillReducer from './features/skillSlice.js'
import languageReducer from './features/languageSlice.js'


export const store = configureStore({
    reducer:{
        profile: profileReducer,
        experiences: experiencesReducer,
        skills: skillReducer,
        educations: educationReducer,
        languages: languageReducer
    }
})