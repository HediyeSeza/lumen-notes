import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] dark:bg-slate-900">
      <Outlet />
    </div>
  );
};

export default MainLayout;