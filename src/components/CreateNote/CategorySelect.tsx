import { ChevronDownIcon } from "../../assets/icons";

type CategorySelectProps = {
  value: string;
  onChange: (value: string) => void;
};

const CategorySelect = ({
  value,
  onChange,
}: CategorySelectProps) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          appearance-none

          rounded-xl

          border
          border-slate-200
          dark:border-slate-700

          bg-white
          dark:bg-slate-800

          px-4
          pr-12
          py-3

          text-slate-700
          dark:text-white

          outline-none

          transition-colors
          duration-200

          focus:border-yellow-400
        "
      >
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Ideas">Ideas</option>
        <option value="Study">Study</option>
      </select>

      <img
        src={ChevronDownIcon}
        alt="Chevron Down"
        className="
          pointer-events-none

          absolute
          right-4
          top-1/2

          h-4
          w-4

          -translate-y-1/2

          opacity-60
          dark:opacity-80
        "
      />
    </div>
  );
};

export default CategorySelect;