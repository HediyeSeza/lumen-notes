import GridIcon from "../../assets/icons/grid.svg";
import MenuIcon from "../../assets/icons/menu.svg";

const ViewToggle = () => {
  return (
    <div className="flex rounded-2xl border border-slate-200 bg-white p-1">
      <button className="rounded-xl bg-yellow-100 p-3">
        <img src={GridIcon} className="h-5 w-5" />
      </button>

      <button className="rounded-xl p-3">
        <img src={MenuIcon} className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ViewToggle;