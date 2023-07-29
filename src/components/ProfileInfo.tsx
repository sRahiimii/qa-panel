import React from "react";
import ChevronDown from "../assets/svg/ChevronDown";

interface ProfileInfoProps {
  avatarUrl: string;
  fullName: string;
}

const ProfileInfo = ({ avatarUrl, fullName }: ProfileInfoProps) => {
  return (
    <div className="flex flex-row items-center gap-x-4">
      <ChevronDown />
      <div className="text-sm font-bold">{fullName}</div>
      <img src={avatarUrl} className="h-11 w-11 rounded-3xl" />
    </div>
  );
};

export default ProfileInfo;
