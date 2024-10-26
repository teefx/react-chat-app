import React from "react";
import Input from "../Component/input";
import Login from "../Component/login";

const LoginPage = () => {
  return (
    <div className=" h-[100vh] flex items-center justify-center">
      <Login />
      <div className="h-full w-full bg-gradient-to-tr from-myBlue to-myPink absolute top-0 -z-10 opacity-90" />
      <div className="h-full w-full absolute bg-heroPattern top-1 -z-10 opacity-5" />
    </div>
  );
};

export default LoginPage;
