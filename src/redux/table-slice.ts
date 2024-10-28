import { createSlice } from '@reduxjs/toolkit';

export interface Table {
  rowSelected: number | null;
}
export const EmptyTable: Table = {
  rowSelected: null
};

export const tableSlice = createSlice({
  name: 'table',
  initialState: EmptyTable,
  reducers: {
    updateTable: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetTable: () => EmptyTable
  }
});

export const { updateTable, resetTable } = tableSlice.actions;
export default tableSlice.reducer;
