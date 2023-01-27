import React from "react";
import Navbar from "./Navbar";
type Child = {
  children: string;
};

//layout (used in app.tsx) for every page.
function Layout({ children }: Child) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
