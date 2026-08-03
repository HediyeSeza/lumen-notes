import Logo from "../../assets/Star.png";

const SidebarLogo = () => {
  return (
    <div className="flex items-center gap-2 px-6 pt-6 pb-10">
      <img
        src={Logo}
        alt="Lumen Logo"
        className="h-14 w-14 object-contain"
      />

      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Lumen
        </h1>

        <p className="mt-1 text-xs text-gray-500 dark:text-slate-400">
          Light up your ideas
        </p>
      </div>
    </div>
  );
};

export default SidebarLogo;