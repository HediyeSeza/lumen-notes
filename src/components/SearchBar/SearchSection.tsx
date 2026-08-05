import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import ViewToggle from "./ViewToggle";

type SearchSectionProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchSection = ({
  value,
  onChange,
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
          value={value}
          onChange={onChange}
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <SortDropdown />
        <ViewToggle />
      </div>
    </section>
  );
};

export default SearchSection;