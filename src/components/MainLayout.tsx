import React, { useEffect, ReactElement } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";

import { getUserInfo } from "../network/restApis/getUserInfo";
import { setUserInfo } from "../store/reducers/userReducer";
import Header from "./Header";

interface Props {
  children: ReactElement;
}

const MainLayout = ({ children }: Props) => {
  const { data: userInfo } = useQuery(["getUserInfo"], getUserInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    const userInfoData = userInfo?.data;
    if (userInfoData) {
      dispatch(setUserInfo(userInfoData));
    }
  }, [userInfo]);

  return userInfo ? (
    <div className="layout-container">
      <Header userInfo={userInfo?.data} />
      {children}
    </div>
  ) : null;
};

export default MainLayout;
