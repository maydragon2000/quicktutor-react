import React from "react";
import SingleIntroduce from "../../components/SingleIntroduce/SingleIntroduce";
const LearningIntroduce = () => {
  const introduceDetail = [
    {
      image: "you-in-control.svg",
      title: "Learn instantly",
      description:
        "Get a tutor with the tap of a button. Connect, message, and schedule sessions. Payments are simple and easy.",
    },
    {
      image: "online-person.svg",
      title: "Anything, anytime",
      description:
        "Learn or teach anything, at anytime — in person or online with the tap of a button.",
    },
    {
      image: "a-tutor-fit.svg",
      title: "Anyone can teach",
      description:
        "Tutors set their own prices, work on their own schedule, and are provided tools to earn more money. Anyone can tutor.",
    },
  ];
  return (
    <div className="introduce">
      <div className="container introduce-inner">
        {introduceDetail.map((item, index) => (
          <SingleIntroduce data={item} key={index} />
        ))}
      </div>
    </div>
  );
};
export default LearningIntroduce;
