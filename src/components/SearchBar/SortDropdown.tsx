const SortDropdown = () => {
  return (
    <select
      className="
        h-14
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-4
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <option>Newest</option>
      <option>Oldest</option>
      <option>A-Z</option>
    </select>
  );
};

export default SortDropdown;