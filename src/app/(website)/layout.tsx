import React from "react";
import LandingPageNavBar from "./_components/navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col pt-10 px-10  xl:px-0 ">
      <LandingPageNavBar />
      {children}
    </div>
  );
};

export default Layout;
