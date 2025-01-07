const { createSlice } = require("@reduxjs/toolkit")

const initialState= [];

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers:{
        addProject: (state) =>{
            let newProject = {
                id: Date.now(),
                title: '',
                subtitle: '',
                url: '',
                startDate: '',
                endDate: '',
                description: ''
            }
            state.push(newProject)
        },
        updateProject:(state, {payload}) =>{
            const {id, field, value} = payload;
            const item = state.find((piece) => piece?.id == id);
            if(item){
                item[field] = value
            }
        },
        removeProject: (state, {payload}) =>{
            return state?.filter(item => item?.id != id)
        }
    }
})

export const {addProject, updateProject, removeProject} = projectSlice.actions
export default projectSlice.reducer