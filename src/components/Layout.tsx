import React from "react";
import NavBar from "./navbar/NavBar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className="h-10"></div>
      {children}
    </>
  );
};

export default Layout;
