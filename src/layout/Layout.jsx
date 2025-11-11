import { Outlet } from "react-router";

import Header from "./Header.jsx";
import Aside from "./Aside.jsx";

const Layout = () => {
  return (
    <>
      <Header className="header" />
      <Aside />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
