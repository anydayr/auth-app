import { configureStore } from '@reduxjs/toolkit';
import { UserInfo } from '../models/user.model';

import userSlice from './user-slice';
import modalSlice, { Modal } from './modal-slice';
import snackbarSlice, { Snackbar } from './snakcbar-slice';
import { Table } from './table-slice';
import tableSlice from './table-slice';

export interface AppStore {
  user: UserInfo;
  modal: Modal;
  snackbar: Snackbar;
  table: Table;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSlice,
    modal: modalSlice,
    snackbar: snackbarSlice,
    table: tableSlice
  }
});
