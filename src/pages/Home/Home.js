import React from "react";
import Header from "./Header";
import LearningIntroduce from "./LearningIntroduce";
import Posibilities from "./Posibilities";
import Helper from "./Helper";
import "./style.css";
const Home = () => {
  return (
    <>
      <Header />
      <LearningIntroduce />
      <Posibilities />
      <Helper />
    </>
  );
};
export default Home;
