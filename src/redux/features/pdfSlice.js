const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    triggerDownload:false
}
const pdfSlice = createSlice({
    name: 'pdf',
    initialState,
    reducers: {
        downloadPdf: (state, {payload}) =>{
            const {status} = payload
            state.triggerDownload = status
        }
    }
})


export const {downloadPdf} = pdfSlice.actions
export default pdfSlice.reducer