import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInfoType {
  id: number;
  avatar: string;
  fullName: string;
}

const initialState: UserInfoType = {
  id: 0,
  avatar: "",
  fullName: "",
};

const questionSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setUserInfo } = questionSlice.actions;
export default questionSlice.reducer;
