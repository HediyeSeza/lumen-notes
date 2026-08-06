import {
  ActiveMoonFilledIcon,
  SunFilledIcon,
} from "../../../assets/icons";

import useTheme from "../../hooks/useTheme";

const MobileTopBar = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <header
      className="
        bg-[#FFFDF5]
        dark:bg-slate-950

        px-6
        pt-12
        pb-6
      "
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-3xl leading-none">
            ✨
          </span>

          <h1
            className="
              text-[30px]
              font-extrabold
              tracking-tight

              text-slate-900
              dark:text-white
            "
          >
            Lumen
          </h1>
        </div>

        {/* Theme */}
        <button
          onClick={toggleTheme}
          className="
            flex
            h-14
            w-14
            items-center
            justify-center

            rounded-2xl

            border
            border-yellow-200

            bg-white

            shadow-sm

            transition-all
            duration-300

            hover:shadow-lg
            active:scale-95

            dark:border-slate-700
            dark:bg-slate-900
          "
        >
          <img
            src={
              dark
                ? SunFilledIcon
                : ActiveMoonFilledIcon
            }
            alt="Theme"
            className="h-6 w-6"
          />
        </button>
      </div>
    </header>
  );
};

export default MobileTopBar;