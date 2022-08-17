import React from "react";
import Logo from "./Logo";
import LogoDescription from "./LogoDescription";
import NavigationBar from "./NavigationBar";
import NavigationWrapper from "./NavigationWrapper";

const index = () => {
  return (
    <NavigationWrapper>
      <Logo />
      <LogoDescription />
      <NavigationBar />
    </NavigationWrapper>
  );
};

export default index;
