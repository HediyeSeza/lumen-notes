import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import TopBar from "../components/TopBar";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#FFFDF5] dark:bg-slate-950">
      <Sidebar />

      <main className="flex-1">
        <TopBar />

        <div className="px-6 py-8 lg:px-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;