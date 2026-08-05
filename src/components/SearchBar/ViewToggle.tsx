import {
  GridIcon,
  MenuIcon,
} from "../../assets/icons";

const ViewToggle = () => {
  return (
    <div className="flex

    rounded-2xl

    border
    border-slate-200
    dark:border-slate-700

    bg-white
    dark:bg-slate-800

    p-1">
      <button className="rounded-xl bg-yellow-100 dark:bg-yellow-400 p-3">
        <img src={GridIcon} className="h-5 w-5" />
      </button>

      <button className="rounded-xl p-3">
        <img src={MenuIcon} className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ViewToggle;