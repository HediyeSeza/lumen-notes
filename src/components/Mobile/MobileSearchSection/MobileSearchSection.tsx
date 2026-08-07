import {
  SearchIcon,
  FilterIcon,
  GridIcon,
  MenuIcon,
} from "../../../assets/icons";

import type { SortOption } from "../../SearchBar/SortDropdown";

type MobileSearchSectionProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  notesCount: number;

  sortValue: SortOption;
  onSortChange: (value: SortOption) => void;
};

const MobileSearchSection = ({
  searchValue,
  onSearchChange,
  notesCount,
  sortValue,
  onSortChange,
}: MobileSearchSectionProps) => {
  return (
    <section className="px-6">
      {/* Search + Filter */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <img
            src={SearchIcon}
            alt="Search"
            className="
              absolute
              left-4
              top-1/2
              h-4
              w-4
              -translate-y-1/2
              opacity-40
            "
          />

          <input
            type="text"
            value={searchValue}
            onChange={(e) =>
              onSearchChange(e.target.value)
            }
            placeholder="Search notes..."
            className="
              h-[52px]
              w-full

              rounded-2xl

              border
              border-slate-200

              bg-white

              pl-11
              pr-4

              text-sm

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

        {/* Sort */}
        <div className="relative">
          <button
            className="
              flex
              h-[52px]
              w-[52px]
              items-center
              justify-center

              rounded-2xl

              border
              border-slate-200

              bg-white

              shadow-sm

              transition-all
              duration-300

              hover:shadow-md
              active:scale-95

              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            <img
              src={FilterIcon}
              alt="Sort"
              className="h-5 w-5"
            />
          </button>

          <select
            value={sortValue}
            onChange={(e) =>
              onSortChange(
                e.target.value as SortOption
              )
            }
            className="
              absolute
              inset-0
              cursor-pointer
              opacity-0
            "
          >
            <option value="newest">
              Newest
            </option>

            <option value="oldest">
              Oldest
            </option>

            <option value="az">A-Z</option>

            <option value="za">Z-A</option>
          </select>
        </div>
      </div>

      {/* Title */}
      <div className="mt-7 flex items-center justify-between">
        <div>
          <h2
            className="
              text-[30px]
              font-extrabold
              tracking-tight

              text-slate-900
              dark:text-white
            "
          >
            All Notes{" "}
            
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            {notesCount}{" "}
            {notesCount === 1
              ? "note"
              : "notes"}
          </p>
        </div>

        {/* Grid / List */}
        <div
          className="
            flex

            rounded-2xl

            border
            border-slate-200

            bg-white

            p-1.5

            shadow-sm

            dark:border-slate-700
            dark:bg-slate-900
          "
        >
          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-xl

              bg-yellow-400

              shadow-sm
            "
          >
            <img
              src={GridIcon}
              alt="Grid"
              className="h-5 w-5"
            />
          </button>

          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-xl

              transition-colors
            "
          >
            <img
              src={MenuIcon}
              alt="List"
              className="h-5 w-5 opacity-60"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileSearchSection;