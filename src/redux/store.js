
const { configureStore } = require('@reduxjs/toolkit');
import experiencesReducer from './features/experienceSlice.js'
import educationReducer from './features/educationSlice.js'
import profileReducer from './features/profileSlice.js'
import skillReducer from './features/skillSlice.js'
import languageReducer from './features/languageSlice.js'
import certificateReducer from './features/certificateSlice.js'
import interestReducer from './features/interestSlice.js'
import projectReducer from './features/projectSlice.js'
import courseReducer from './features/courseSlice.js'
import awardReducer from './features/awardSlice.js'
import organizationReducer from './features/organizationSlice.js'
import publicationReducer from './features/publicationSlice.js'
import referenceReducer from './features/referenceSlice.js'
import declarationReducer from './features/declarationSlice.js'
import customReducer from './features/customSlice.js'
import pdfReducer from './features/pdfSlice.js'
import userReducer from './features/userSLice.js'
import styleReducer from './features/styleSlice'


export const store = configureStore({
    reducer:{
        user: userReducer,
        profile: profileReducer,
        experiences: experiencesReducer,
        skills: skillReducer,
        projects: projectReducer,
        educations: educationReducer,
        organizations: organizationReducer,
        courses: courseReducer,
        publications: publicationReducer,
        awards: awardReducer,
        languages: languageReducer,
        certificates: certificateReducer,
        interests: interestReducer,
        references: referenceReducer,
        declaration: declarationReducer,
        custom: customReducer,
        pdf: pdfReducer,
        style: styleReducer
    }
})