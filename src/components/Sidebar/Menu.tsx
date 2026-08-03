import { NavLink } from "react-router-dom";

import NoteIcon from "../../assets/icons/note.svg";
import StarIcon from "../../assets/icons/star.svg";
import TrashIcon from "../../assets/icons/trash.svg";

const menuItems = [
  {
    title: "All Notes",
    path: "/",
    icon: NoteIcon,
    count: 12,
  },
  {
    title: "Favorites",
    path: "/favorites",
    icon: StarIcon,
    count: 3,
  },
  {
    title: "Trash",
    path: "/trash",
    icon: TrashIcon,
    count: 2,
  },
];

const SidebarMenu = () => {
  return (
    <nav className="px-2">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.title}>
            <NavLink
  to={item.path}
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
    <>
      <div className="flex items-center gap-3">
        <img
          src={item.icon}
          alt={item.title}
          className="h-5 w-5"
        />

        <span className="font-medium">
          {item.title}
        </span>
      </div>

      <span
        className={`
          flex
          h-7
          min-w-7
          items-center
          justify-center
          rounded-full
          px-2
          text-xs
          font-semibold
          ${
            isActive
              ? "bg-yellow-100 text-yellow-700"
              : "bg-white text-slate-500 shadow-sm dark:bg-slate-800"
          }
        `}
      >
        {item.count}
      </span>
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