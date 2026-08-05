import SearchBar from "./SearchBar";
import SortDropdown, {
  type SortOption,
} from "./SortDropdown";
import ViewToggle from "./ViewToggle";

type SearchSectionProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;

  sortValue: SortOption;
  onSortChange: (value: SortOption) => void;
};

const SearchSection = ({
  searchValue,
  onSearchChange,
  sortValue,
  onSortChange,
}: SearchSectionProps) => {
  return (
    <section
      className="
        mt-8
        flex
        flex-col
        gap-4

        xl:flex-row
        xl:items-center
        xl:justify-between
      "
    >
      {/* Search */}
      <div className="xl:w-[48%]">
        <SearchBar
          value={searchValue}
          onChange={onSearchChange}
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <SortDropdown
          value={sortValue}
          onChange={onSortChange}
        />

        <ViewToggle />
      </div>
    </section>
  );
};

export default SearchSection;