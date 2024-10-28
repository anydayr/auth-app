import { createSlice } from '@reduxjs/toolkit';

export interface Snackbar {
  open: boolean;
  text: string;
  severity: 'info' | 'error' | 'success' | 'warning';
}
export const EmptySnackbar: Snackbar = {
  open: false,
  text: 'Initial text',
  severity: 'info'
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: EmptySnackbar,
  reducers: {
    updateSnackbar: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetSnackbar: () => EmptySnackbar
  }
});

export const { updateSnackbar, resetSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
