const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];
const organizationSlice = createSlice({
  name: "organizations",
  initialState,
  reducers:{
    addOrganization: (state) =>{
        let newOrganization = {
            id: Date.now(),
            org: '',
            position: '',
            city: '',
            country: '',
            startDate: '',
            endDate: '',
            description: ''
        }
        state.push(newOrganization)
    },
    updateOrganization:(state, {payload}) =>{
        const {id, field, value} = payload;
        const item = state.find((piece) => piece?.id == id);
        if(item){
            item[field] = value
        }
    },
    removeOrganization: (state, {payload}) =>{
        return state?.filter(item => item?.id != id)
    }
  }
});


export const {addOrganization, updateOrganization, removeOrganization} = organizationSlice.actions;
export default organizationSlice.reducer
