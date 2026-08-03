import BellIcon from "../assets/icons/bell.svg";
import PlusIcon from "../assets/icons/plus.svg";

const TopBar = () => {
  return (
    <header
      className="
        border-b
        border-yellow-200
        bg-[#FFFDF5]
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div
        className="
          flex
          items-center
          justify-between

          px-4
          py-6

          md:px-8
          lg:px-10
        "
      >
        {/* Left */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            All Notes <span className="text-yellow-400">✨</span>
          </h1>

          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
            12 notes in total
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* New Note */}
          <button
  className="
    flex
    items-center
    gap-2
    bg-yellow-400
    h-12
    px-4
    rounded-xl
    font-semibold
    transition-all
    duration-300
    hover:bg-yellow-500
    hover:shadow-lg
  "
>
  <img
    src={PlusIcon}
    alt="Plus"
    className="h-6 w-6"
  />

  <span className="hidden sm:block">
    New Note
  </span>
</button>

          {/* Bell */}
          <button
  className="
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-xl
    border
    border-yellow-300
    bg-white
    transition-all
    duration-300
    hover:bg-yellow-400
    hover:shadow-md
    dark:border-slate-700
    dark:bg-slate-800
  "
>
  <img
    src={BellIcon}
    alt="Bell"
    className="h-5 w-5"
  />
</button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;