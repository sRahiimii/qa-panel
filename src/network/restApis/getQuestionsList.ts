import { Question } from "../../store/reducers/questionReducer";
import request from "../request";

export const getQuestionsList = async () => {
  const response = await request.get<Array<Question>>("questions");
  return response;
};
