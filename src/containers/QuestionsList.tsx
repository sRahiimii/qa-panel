import React from "react";
import { useQuery } from "react-query";
import CtaButton from "../components/CtaButton";
import QuestionAnnswerBox from "../components/QuestionAnswerBox";
import { getQuestionsList } from "../network/restApis/getQuestionsList";

const QuestionsList = () => {
  const { data, isLoading } = useQuery(["getQuestionsList"], getQuestionsList);
  const questionsList = data?.data;
  const currentQuestion = questionsList;

  const renderDetailButton = () => (
    <CtaButton title=" مشاهده جزییات" onClick={() => {}} />
  );
  return !isLoading && currentQuestion ? (
    <div className="py-8 px-14 flex flex-col gap-5">
      {questionsList.map((currentQuestion) => {
        return (
          <QuestionAnnswerBox
            mode="question"
            subject={currentQuestion.subject}
            date={currentQuestion.creationDate}
            time={currentQuestion.creationTime}
            body={currentQuestion.title}
            userAvatar={currentQuestion.creatorAvatar}
            ctaButton={renderDetailButton()}
            answersCount={currentQuestion.answersCount}
          />
        );
      })}
    </div>
  ) : null;
};

export default QuestionsList;
