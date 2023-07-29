import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Question {
  id: number;
  subject: string;
  title: string;
  answersCount: number;
  creationDate: string;
  creationTime: string;
  creatorAvatar: string;
}

const initialState: Question = {
  id: 0,
  subject: "",
  title: "",
  answersCount: 0,
  creationDate: "",
  creationTime: "",
  creatorAvatar: "",
};

const questionSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    incrementAnswers(state) {
      state.answersCount++;
    },
  },
});

export const {} = questionSlice.actions;
export default questionSlice.reducer;
