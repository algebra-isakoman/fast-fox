import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

  return (
    <>
      <Header
        onClose={() => setSidebarIsOpen(false)}
        toggleSidebar={() => setSidebarIsOpen(!sidebarIsOpen)}
      />
      <Outlet />
      <Sidebar onClose={() => setSidebarIsOpen(false)} isOpen={sidebarIsOpen} />
    </>
  );
};

export default Layout;
