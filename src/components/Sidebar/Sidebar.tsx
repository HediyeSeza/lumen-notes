import SidebarLogo from "./Logo";
import SidebarMenu from "./Menu";
import Labels from "./Labels";
import UpgradeCard from "./UpgradeCard";
import Profile from "./Profile";
import ThemeSwitcher from "./ThemeToggle";

type SidebarProps = {
  notesCount: number;
  favoritesCount: number;
  trashCount: number;
};

const Sidebar = ({
  notesCount,
  favoritesCount,
  trashCount,
}: SidebarProps) => {
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

      <SidebarMenu
        notesCount={notesCount}
        favoritesCount={favoritesCount}
        trashCount={trashCount}
      />

      <Labels />

      <div className="flex-1" />

      <UpgradeCard />

      <Profile />

      <ThemeSwitcher />
    </aside>
  );
};

export default Sidebar;