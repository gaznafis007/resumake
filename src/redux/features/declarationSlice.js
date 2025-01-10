const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  description: "",
  image: "",
  name: "",
  address: "",
  date: "",
};
const declarationSlice = createSlice({
  name: "declaration",
  initialState,
  reducers: {
    updateDeclaration: (state, { payload }) => {
      const { field, value } = payload;
      state[field] = value;
    },
    removeDeclaration: (state) => {
      const newDeclaration = {
        description: "",
        image: "",
        name: "",
        address: "",
        date: "",
      };
      state = newDeclaration
    },
  },
});

export const { updateDeclaration, removeDeclaration } = declarationSlice.actions;
export default declarationSlice.reducer;
