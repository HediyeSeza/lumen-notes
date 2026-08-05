import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#FFFDF5] dark:bg-slate-900">
      <Sidebar />

      <main className="flex-1">
        

        <div className="pb-8">
  <Outlet />
</div>
      </main>
    </div>
  );
};

export default MainLayout;