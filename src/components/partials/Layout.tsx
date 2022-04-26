import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="Shell">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
