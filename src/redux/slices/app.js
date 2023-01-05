import { createSlice, current } from "@reduxjs/toolkit";
//
import { dispatch } from "../store";

// ----------------------------------------------------------------------

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // can be CONTACT, STARRED, SHARED
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Toggle Sidebar
    ToggleSidebar(state) {
      console.log(current(state))
      state.sidebar.open = !current(state).sidebar.open
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function ToggleSidebar() {
  return async () => {
    dispatch(slice.actions.ToggleSidebar());
  };
}
export function UpdateSidebarType(type) {
  return async () => {
    dispatch(slice.actions.updateSidebarType({ type }));
  };
}