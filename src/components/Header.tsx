import React from "react";
import CtaButton from "./CtaButton";
import PlusIcon from "../assets/svg/PlusIcon";
import ProfileInfo from "./ProfileInfo";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { UserInfoType } from "../store/reducers/userReducer";

interface HeaderProp {
  userInfo: UserInfoType;
}

const Header = ({ userInfo }: HeaderProp) => {
  return (
    <div className="flex flex-row-reverse justify-between header-container ">
      <div className="header-title"> لیست سوالات</div>
      <div className="flex items-center">
        <ProfileInfo fullName={userInfo.fullName} avatarUrl={userInfo.avatar} />
        <CtaButton
          solid
          title="سوال جدید"
          className="ml-8"
          onClick={() => {}}
          icon={<PlusIcon />}
        />
      </div>
    </div>
  );
};

export default Header;
