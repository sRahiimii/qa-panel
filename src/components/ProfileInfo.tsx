import React from "react";
import ChevronDown from "../assets/svg/ChevronDown";

interface ProfileInfoProps {
  url?: string;
  fullName?: string;
}

const ProfileInfo = ({ url, fullName }: ProfileInfoProps) => {
  return (
    <div className="flex flex-row items-center gap-x-4">
      <ChevronDown />
      <div className="text-sm font-bold">{fullName}</div>
      <img src={url} className="h-11 w-11 rounded-3xl" />
    </div>
  );
};

export default ProfileInfo;
