import { StarFilledIcon } from "../../assets/icons";

const Loader = () => {
  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]

        flex
        items-center
        justify-center

        bg-[#FFFDF5]

        dark:bg-slate-950
      "
    >
      <div className="relative flex h-20 w-20 items-center justify-center">
        {/* Ring */}
        <div
          className="
            absolute
            h-20
            w-20
            rounded-full
            border-4
            border-yellow-400
            border-t-transparent
            animate-spin
          "
        />

        {/* Star */}
        <img
          src={StarFilledIcon}
          alt="Loading"
          className="h-8 w-8"
        />
      </div>
    </div>
  );
};

export default Loader;