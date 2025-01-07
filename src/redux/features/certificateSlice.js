const { createSlice } = require("@reduxjs/toolkit")

const initialState = [];

const certificateSlice = createSlice({
    name: 'certificate',
    initialState,
    reducers:{
        addCertificate: (state) =>{
            let newCertificate = {
                id: Date.now(),
                name: '',
                org: '',
                description: ''

            }
            state.push(newCertificate)
        },
        updateCertificate: (state, {payload}) =>{
            const {id, field, value} = payload;
            const certificate = state.find((item) => item?.id == id);
            if(certificate){
                certificate[field] = value
            }
        },
        removeCertificate: (state, {payload}) =>{
            return state.filter(certificate => certificate?.id != payload)
        }
    }
})

export const {addCertificate, updateCertificate, removeCertificate} = certificateSlice.actions
export default certificateSlice.reducer