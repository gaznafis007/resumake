
const { configureStore } = require('@reduxjs/toolkit');
import experiencesReducer from './features/experienceSlice.js'

export const store = configureStore({
    reducer:{
        experiences: experiencesReducer
    }
})