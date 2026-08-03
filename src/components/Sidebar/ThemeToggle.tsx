import { useState } from "react";

import SunIcon from "../../assets/icons/sun.svg";
import MoonIcon from "../../assets/icons/moon.svg";

const ThemeSwitcher = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className="px-4 pb-4">
      <button
        onClick={() => setDark(!dark)}
        className="
          flex
          h-14
          w-full
          items-center
          rounded-full
          bg-yellow-50
          p-1
        "
      >
        <div
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-white
            shadow
            transition-all
            duration-300

            ${dark ? "translate-x-12" : ""}
          `}
        >
          <img
            src={dark ? MoonIcon : SunIcon}
            className="h-5 w-5"
          />
        </div>
      </button>
    </div>
  );
};

export default ThemeSwitcher;