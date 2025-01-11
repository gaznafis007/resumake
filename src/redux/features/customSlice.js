const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    name: '',
    sections: []
}
const customSlice = createSlice({
    name: 'custom',
    initialState,
    reducers:{
        addSectionName: (state, {payload})=>{
            state.name = payload
        },
        addSection: (state) =>{
            let newSection ={
                id: Date.now(),
                title: '',
                subtitle: '',
                city: '',
                country: '',
                startDate: '',
                endDate: '',
                description: ''
            }
            state.sections.push(newSection)
        },
        updateSection: (state, {payload}) =>{
            const {id, field, value} = payload;
            const section = state.sections?.find(item => item?.id == id);
            if(section){
                section[field] = value
            }
        },
        removeSection: (state, {payload}) =>{
            state.sections =state?.sections?.filter(item => item?.id != payload)
        }
    }
})

export const {addSectionName, addSection, updateSection, removeSection} = customSlice.actions;
export default customSlice.reducer