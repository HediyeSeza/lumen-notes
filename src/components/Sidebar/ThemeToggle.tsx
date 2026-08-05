import { useEffect, useState } from "react";

import {
  SunIcon,
  MoonIcon,
  ActiveSunFilledIcon,
 ActiveMoonFilledIcon,
} from "../../assets/icons";

const ThemeSwitcher = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="flex justify-center px-6 pb-6">
      <button
        onClick={() => setDark((prev) => !prev)}
        className="
          relative
          h-12
          w-40
          rounded-full
          border
          border-yellow-200
          bg-[#FFF9E8]
          transition-all
          duration-700
          ease-in-out

          dark:border-slate-700
          dark:bg-slate-800
        "
      >
        {/* Background Icons */}
        <div className="absolute inset-0 flex items-center">
          <div className="flex w-1/2 justify-center">
            {dark && (
              <img
                src={SunIcon}
                alt="Light"
                className="h-5 w-5 opacity-25"
              />
            )}
          </div>

          <div className="flex w-1/2 justify-center">
            {!dark && (
              <img
                src={MoonIcon}
                alt="Dark"
                className="h-5 w-5 opacity-25"
              />
            )}
          </div>
        </div>

        {/* Slider */}
        <div
          className={`
            absolute
            inset-y-1
            flex
            w-full
            items-center
            px-1
            transition-all
            duration-700
            ease-in-out
            ${dark ? "translate-x-[112px]" : "translate-x-0"}
          `}
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#FFF3B5]
              shadow-md
              transition-all
              duration-700
              ease-in-out

              dark:bg-slate-600
            "
          >
            <img
              src={
                dark
                  ? ActiveMoonFilledIcon
                  : ActiveSunFilledIcon
              }
              alt="Theme"
              className="h-5 w-5"
            />
          </div>
        </div>
      </button>
    </div>
  );
};

export default ThemeSwitcher;