import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../models/user.model';
import { Roles } from '../models/roles';
import { persistLocalStorage } from '../utilities/local-storage-utilities';

export const EmptyUserState: UserInfo = {
  id: 0,
  user: '',
  rol: Roles.USER,
  color: ''
};
export const UserKey = 'user';
export const userSlice = createSlice({
  name: 'user',
  initialState: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') as string)
    : EmptyUserState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorage<UserInfo>(UserKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => EmptyUserState
  }
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
