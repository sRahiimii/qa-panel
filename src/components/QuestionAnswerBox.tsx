import React from "react";
import { ReactElement } from "react";
import CommentIcon from "../assets/svg/CommentIcon";

interface Props {
  mode: "answer" | "question";
  subject: string;
  date: string;
  time: string;
  body: string;
  userAvatar: string;
  answersCount?: number;
  likesCount?: number;
  dislikeCounts?: number;
  ctaButton: ReactElement;
}

const QuestionAnnswerBox = ({
  subject,
  userAvatar,
  body,
  answersCount,
  date,
  time,
  ctaButton,
}: Props) => {
  const renderDateAndTime = (title: string, value: string) => {
    return (
      <div className="flex font-normal text-xs text-gray-500 ">
        <div className="text-xs font-bold mr-1 text-black">{value}</div> :{" "}
        {title}
      </div>
    );
  };

  const renderAnswersCount = (count: number) => {
    return (
      <div className="flex items-center gap-1 text-xs text-gray-500 mr-6">
        {count}
        <CommentIcon />
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full h-40 rounded-lg  question-answer-box-container ">
      <div className="flex flex-row-reverse px-4 py-2 bg-white justify-between items-center rounded-lg">
        <div className="flex items-center text-base font-bold">
          {subject}
          <img
            src={userAvatar}
            className="w-8 h-8 rounded-lg object-cover ml-4 bg-black "
          />
        </div>
        <div className="flex flex-row-reverse items-center">
          {renderDateAndTime("ساعت", time)}
          <div className="w-px h-6 mx-3 bg-gray-200" />
          {renderDateAndTime("تاریخ", date)}
          {answersCount && renderAnswersCount(answersCount)}
        </div>
      </div>
      <div className="flex flex-col items-end p-4 text-sm font-normal w-full h-full">
        {body}
        <div className="self-end w-full mt-4">{ctaButton}</div>
      </div>
    </div>
  );
};

export default QuestionAnnswerBox;
