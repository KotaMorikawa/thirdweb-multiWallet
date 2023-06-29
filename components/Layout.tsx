import Header from "./Header";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
