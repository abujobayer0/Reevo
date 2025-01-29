import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return (
    <div className="container flex h-screen justify-center items-center ">
      {props.children}
    </div>
  );
};

export default layout;
