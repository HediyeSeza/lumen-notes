import SidebarLogo from "./Logo";
import SidebarMenu from "./Menu";
import Labels from "./Labels";
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
        sticky
        top-0

        h-screen
        w-80
        shrink-0

        flex
        flex-col

        border-r
        border-slate-200

        bg-white

        dark:border-slate-800
        dark:bg-slate-900
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

      <div className="px-6 pb-6">
        <Profile />

        <div className="mt-6">
          <ThemeSwitcher />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;