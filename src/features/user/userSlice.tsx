import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userApi = () =>
  axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
  });

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const { data } = await userApi();
  return data;
});

const initialState = {
  userData: [],
  status: "idle",
};

type initialStateProps = {
  user: {
    userData: object[];
    status: string;
  };
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = "complete";
      state.userData = action.payload;
    });
  },
});

export default userSlice.reducer;
