import {
  ActiveNoteIcon,

  StarIcon,
 

  FilterIcon,
  

  ProfileIcon,
  
} from "../../../assets/icons";

const MobileBottomNavigation = () => {
  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        right-0

        z-40

        flex
        items-center
        justify-around

        border-t
        border-slate-200

        bg-white

        px-2
        py-3

        dark:border-slate-800
        dark:bg-slate-900

        md:hidden
      "
    >
      {/* Notes */}
      <button
        className="
          flex
          flex-col
          items-center
          gap-1
        "
      >
        <img
          src={ActiveNoteIcon}
          alt="Notes"
          className="h-6 w-6"
        />

        <span
          className="
            text-xs
            font-medium

            text-yellow-500
          "
        >
          Notes
        </span>
      </button>

      {/* Favorites */}
      <button
        className="
          flex
          flex-col
          items-center
          gap-1
        "
      >
        <img
          src={StarIcon}
          alt="Favorites"
          className="h-6 w-6"
        />

        <span
          className="
            text-xs

            text-slate-500
            dark:text-slate-400
          "
        >
          Favorites
        </span>
      </button>

      {/* Labels */}
      <button
        className="
          flex
          flex-col
          items-center
          gap-1
        "
      >
        <img
          src={FilterIcon}
          alt="Labels"
          className="h-6 w-6"
        />

        <span
          className="
            text-xs

            text-slate-500
            dark:text-slate-400
          "
        >
          Labels
        </span>
      </button>

     {/* Profile */}
<button
  className="
    flex
    flex-col
    items-center
    gap-1
  "
>
  <img
    src={ProfileIcon}
    alt="Profile"
    className="h-6 w-6"
  />

  <span
    className="
      text-xs
      text-slate-500
      dark:text-slate-400
    "
  >
    Profile
  </span>
</button>
    </nav>
  );
};

export default MobileBottomNavigation;