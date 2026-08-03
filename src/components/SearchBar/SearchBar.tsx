import SearchIcon from "../../assets/icons/search.svg";

const SearchBar = () => {
  return (
    <div className="relative w-full">
      <img
        src={SearchIcon}
        alt="Search"
        className="
          absolute
          left-4
          top-1/2
          h-5
          w-5
          -translate-y-1/2
          opacity-50
        "
      />

      <input
        type="text"
        placeholder="Search notes..."
        className="
          h-14
          w-full xl:max-w-xl

          rounded-2xl

          border
          border-slate-200

          bg-white

          pl-12
          pr-4

          outline-none

          transition-all
          duration-300

          placeholder:text-slate-400

          focus:border-yellow-300
          focus:ring-4
          focus:ring-yellow-100

          dark:border-slate-700
          dark:bg-slate-900
          dark:text-white
        "
      />
    </div>
  );
};

export default SearchBar;