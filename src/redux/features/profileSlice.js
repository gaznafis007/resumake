const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    socialLinks: [],
    description: ''
}
const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateProfile: (state, {payload}) =>{
            const {field, value} = payload;
            state[field] = value
        },
        updateSocialLink: (state, {payload}) =>{
            let newLink= {
                id: Date.now(),
                name: payload,
            }
            state.socialLinks.push(newLink)
        },
        updateSocialLinkUsernameAndUrl: (state, {payload}) =>{
            const {id, field, value} = payload;
            const socialLink = state.socialLinks?.find((link) => link?.id == id);
            if(socialLink){
                socialLink[field] = value
                // console.log(socialLink)
            }
        },
        removeSocialLink: (state, {payload}) =>{
            state.socialLinks = state?.socialLinks?.filter((link) => link?.id != payload)
        }
    }
})

export const {updateProfile, updateSocialLink,updateSocialLinkUsernameAndUrl, removeSocialLink} = profileSlice.actions
export default profileSlice.reducer