import React from "react";
import CtaButton from "./CtaButton";
import PlusIcon from "../assets/svg/PlusIcon";
import ProfileInfo from "./ProfileInfo";

const Header = () => {
  return (
    <div className="flex flex-row-reverse justify-between header-container ">
      <div className="header-title">لیست سوالات</div>
      <div className="flex items-center">
        <ProfileInfo />
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
