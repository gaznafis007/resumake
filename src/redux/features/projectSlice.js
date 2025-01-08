const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state) => {
      let newProject = {
        id: Date.now(),
        title: "",
        subtitle: "",
        url: "",
        startDate: "",
        endDate: "",
        descriptions: '',
      };
      state.push(newProject);
    },
    updateProject: (state, { payload }) => {
      const { id, field, value } = payload;
      const item = state.find((piece) => piece?.id == id);
      if (item) {
        item[field] = value;
      }
    },
    updateDescription: (state, { payload }) => {
      const { id, value } = payload;
      const project = state.find((item) => item?.id == id);
      if (project) {
        state.descriptions.push(value);
      }
    },
    removeProject: (state, { payload }) => {
      return state?.filter((item) => item?.id != payload);
    },
  },
});

export const { addProject, updateProject, removeProject, updateDescription } =
  projectSlice.actions;
export default projectSlice.reducer;
