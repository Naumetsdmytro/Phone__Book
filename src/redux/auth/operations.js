import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

const setAutorizationHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAutorizationHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      setAutorizationHeader(data.token);
      return data;
    } catch (error) {
      Notiflix.Notify.failure('User with this email is registered!', {
        timeout: 3000,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setAutorizationHeader(data.token);

      return data;
    } catch (error) {
      Notiflix.Notify.failure('Your Email or Password is not correct!', {
        timeout: 3000,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      clearAutorizationHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return rejectWithValue('Unable to fetch user!');
    }
    try {
      setAutorizationHeader(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
