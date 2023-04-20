import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { login, logout, refreshUser, register } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    isLoggedIn: false,
    isRefreshing: false,
    token: null,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      });
  },
});

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
