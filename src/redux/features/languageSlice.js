const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    addLanguage: (state) => {
      const newLanguage = {
        id: Date.now(),
        name: "",
        fluency: "",
        description: "",
      };
      state.push(newLanguage);
    },
    updateLanguage: (state, { payload }) => {
      // const {id, field, value} = payload
      const { id, field, value } = payload;
      const language = state.find((piece) => piece?.id == id);
      if (language) {
        language[field] = value;
      }
    },
    removeLanguage: (state, { payload }) => {
      return state?.filter((item) => item?.id != payload);
    },
  },
});

export const { addLanguage, updateLanguage, removeLanguage } =
  languageSlice.actions;
export default languageSlice.reducer;
