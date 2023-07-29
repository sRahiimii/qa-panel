import { UserInfoType } from "../../store/reducers/userReducer";
import request from "../request";

export const getUserInfo = async () => {
  const response = await request.get<UserInfoType>("userInfo");
  return response;
};
