import React from "react";
import { Outlet } from "react-router";
import Header from "../Component/header";

type Props = {};

function Layout({}: Props) {
  return (
    <div className="h-[100vh] flex flex-col">
      <Header />
      <div className="bg-heroPattern max-h-[100%] flex-1 opacity-15 overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
