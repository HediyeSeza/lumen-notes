import SidebarLogo from "./Logo";
import SidebarMenu from "./Menu";
import Labels from "./Labels";
import UpgradeCard from "./UpgradeCard";
import Profile from "./Profile";
import ThemeSwitcher from "./ThemeToggle";

const Sidebar = () => {
  return (
    <aside
      className="
        hidden
        lg:flex
        w-[290px]
        flex-col
        border-r
        border-yellow-200
        bg-white
        dark:bg-slate-900
        dark:border-slate-800
      "
    >
       <SidebarLogo />

<SidebarMenu />

<Labels />

<div className="flex-1" />

<UpgradeCard />

<Profile />

<ThemeSwitcher />
    
    </aside>
  );
};

export default Sidebar;