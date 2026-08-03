import { useState } from "react";

import SunIcon from "../../assets/icons/sun.svg";
import MoonIcon from "../../assets/icons/moon.svg";

const ThemeSwitcher = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className="flex justify-center px-6 pb-6">
      <button
  className="
    relative
    flex
    h-14
    w-48
    items-center
    rounded-full
    border
    border-yellow-100
    bg-[#FFF9E8]
    p-1
  "
>
        {/* Slider */}
        <div
          className={`
            absolute
            left-1
            top-1

            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-full
            bg-[#FFF3B5]
            shadow-sm

            transition-all
            duration-300

            ${dark ? "translate-x-[104px]" : ""}
          `}
        >
          <img
            src={dark ? MoonIcon : SunIcon}
            alt=""
            className="h-6 w-6"
          />
        </div>

        {/* Sun */}
<div className="flex w-1/2 justify-center">
  <img
    src={SunIcon}
    className={`
      h-6 w-6 transition-all duration-300 
      ${dark ? "opacity-20" : "opacity-100"}
    `}
  />
</div>

{/* Moon */}
<div className="flex w-1/2 justify-center">
  <img
    src={MoonIcon}
    className={`
      h-6 w-6 transition-all duration-300
      ${dark ? "opacity-0" : "opacity-20"}
    `}
  />
</div>
                </button>
    </div>
  );
};

export default ThemeSwitcher;