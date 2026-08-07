import { ChevronDownIcon } from "../../assets/icons";

export type SortOption =
  | "newest"
  | "oldest"
  | "az"
  | "za";

type SortDropdownProps = {
  value: SortOption;
  onChange: (value: SortOption) => void;
};

const SortDropdown = ({
  value,
  onChange,
}: SortDropdownProps) => {
  return (
    <div className="relative w-52">
      <select
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value as SortOption
          )
        }
        className="
          h-14
          w-full

          cursor-pointer

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

          transition-colors
          duration-200

          focus:border-yellow-400
        "
      >
        <option value="newest">
          Newest
        </option>

        <option value="oldest">
          Oldest
        </option>

        <option value="az">
          A → Z
        </option>

        <option value="za">
          Z → A
        </option>
      </select>

      <img
        src={ChevronDownIcon}
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