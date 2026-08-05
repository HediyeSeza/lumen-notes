import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  NoteIcon,
  StarIcon,
  TrashIcon,
  ActiveNoteIcon,
  ActiveStarIcon,
  ActiveTrashIcon,
} from "../../assets/icons";

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
  const [hoveredItem, setHoveredItem] = useState<
    string | null
  >(null);

  const menuItems = [
    {
      title: "All Notes",
      path: "/",
      icon: NoteIcon,
      activeIcon: ActiveNoteIcon,
      count: notesCount,
    },
    {
      title: "Favorites",
      path: "/favorites",
      icon: StarIcon,
      activeIcon: ActiveStarIcon,
      count: favoritesCount,
    },
    {
      title: "Trash",
      path: "/trash",
      icon: TrashIcon,
      activeIcon: ActiveTrashIcon,
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
              onMouseEnter={() =>
                setHoveredItem(item.title)
              }
              onMouseLeave={() =>
                setHoveredItem(null)
              }
              className={({ isActive }) =>
                `
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
                <div className="flex items-center gap-3">
                  <img
                    src={
                      isActive ||
                      hoveredItem === item.title
                        ? item.activeIcon
                        : item.icon
                    }
                    alt={item.title}
                    className="h-5 w-5 transition-all duration-200"
                  />

                  <span className="text-base font-medium">
                    {item.title}
                  </span>
                </div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarMenu;