import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import Introduction from "./Introduction";
import SkillSet from "./SkillSet";
import Profile from "./Profile";
import Footer from "./Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Welcome />
      <Introduction />
      <SkillSet />
      <Profile />
      <Footer />
    </>
  );
};

export default Home;
