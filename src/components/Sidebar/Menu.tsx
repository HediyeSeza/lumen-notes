import { NavLink } from "react-router-dom";

import NoteIcon from "../../assets/icons/note.svg";
import StarIcon from "../../assets/icons/star.svg";
import TrashIcon from "../../assets/icons/trash.svg";

type SidebarMenuProps = {
  notesCount: number;
  favoritesCount: number;
  trashCount: number;
};

const SidebarMenu = ({
  notesCount,
  favoritesCount,
  trashCount,
}: SidebarMenuProps) => {
  const menuItems = [
    {
      title: "All Notes",
      path: "/",
      icon: NoteIcon,
      count: notesCount,
    },
    {
      title: "Favorites",
      path: "/favorites",
      icon: StarIcon,
      count: favoritesCount,
    },
    {
      title: "Trash",
      path: "/trash",
      icon: TrashIcon,
      count: trashCount,
    },
  ];

  return (
    <nav className="mt-1 px-2">
  <ul className="space-y-1.5">
    {menuItems.map((item) => (
      <li key={item.title}>
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `
              className="
  flex
  items-center
  justify-between
  rounded-2xl
  px-4
  py-2

              transition-all
              duration-300

              ${
                isActive
                  ? "bg-yellow-50 text-yellow-600"
                  : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
              }
            `
          }
        >
          {({ isActive }) => (
            <>
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-5 w-5"
                />

                <span className="text-base font-medium">
                  {item.title}
                </span>
              </div>

              
            </>
          )}
        </NavLink>
      </li>
    ))}
  </ul>
</nav>
  );
};

export default SidebarMenu;