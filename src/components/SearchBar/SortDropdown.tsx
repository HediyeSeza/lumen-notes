import { ChevronDown } from "../../assets/icons";

const SortDropdown = () => {
  return (
    <div className="relative">
      <select
        className="
          h-14
          w-full

          appearance-none

          rounded-2xl

          border
          border-slate-200
          dark:border-slate-700

          bg-white
          dark:bg-slate-800

          px-4
          pr-12

          text-slate-700
          dark:text-white

          outline-none
        "
      >
        <option>Newest</option>
        <option>Oldest</option>
        <option>A-Z</option>
      </select>

      <img
        src={ChevronDown}
        alt="Chevron Down"
        className="
          pointer-events-none

          absolute
          right-4
          top-1/2

          h-5
          w-5

          -translate-y-1/2

          opacity-70
          dark:opacity-100
        "
      />
    </div>
  );
};

export default SortDropdown;