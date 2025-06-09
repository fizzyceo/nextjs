import React from "react";

const loading = () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="animate-pulse w-10 h-10 rounded-full bg-amber-300"></div>
    </div>
  );
};

export default loading;
