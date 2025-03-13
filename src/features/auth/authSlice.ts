import { createSlice } from '@reduxjs/toolkit';
import { loginAction, loginToken } from "./authAction";

export interface IUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken:string;
}

interface IAuthState {
  user: IUser,
  isLoading: boolean,
  error: string
}

const initialUser: IUser = {
  id: 0,
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  image: "",
  accessToken: "",
  refreshToken: ""
}

const initialState: IAuthState = {
  user:initialUser,
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
        // logoutUser - название для action
        logoutUser: (state) => {
          // через параметр стрелочной функции мы имеем доступ к state и можем его изменять как нам захочется
          // !  в данном случае мы перезаписали данные о юзере на начальные нулевые
          state.user = initialUser;
        }
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload;
        state.error = '';
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.isLoading = false
        state.user = initialUser
        state.error = action.payload as string
      })
      .addCase(loginToken.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload;
        state.error = '';
      })
  },
});

export default authSlice;
// ! не забываем экспортировать синхронные actions
export const { logoutUser } = authSlice.actions
