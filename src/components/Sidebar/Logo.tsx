import Logo from "../../assets/Star.png";

const SidebarLogo = () => {
  return (
    <div className="flex items-center gap-3 px-5 pt-5 pb-5">
      <img
        src={Logo}
        alt="Lumen Logo"
        className="h-11 w-11 object-contain"
      />

      <div className="leading-tight">
        <h1
          className="
            text-xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          Lumen
        </h1>

        <p
          className="
            mt-0.5
            text-[11px]
            text-slate-500
            dark:text-slate-400
          "
        >
          Light up your ideas
        </p>
      </div>
    </div>
  );
};

export default SidebarLogo;