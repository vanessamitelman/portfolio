import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    }
  }
});

export const { toggleSidebar, closeSidebar } = appSlice.actions;
export default appSlice.reducer;
