import { createSlice } from '@reduxjs/toolkit';

export interface Modal {
  content: string;
}
export const EmptyModal: Modal = {
  content: ''
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState: EmptyModal,
  reducers: {
    updateModalType: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetModal: () => EmptyModal
  }
});

export const { updateModalType, resetModal } = modalSlice.actions;
export default modalSlice.reducer;
