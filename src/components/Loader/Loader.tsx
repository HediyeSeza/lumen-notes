import { StarFilledIcon } from "../../assets/icons";

const Loader = () => {
  return (
    <div className="flex min-h-[350px] items-center justify-center">
      <div className="relative flex items-center justify-center">
        {/* Spinning Ring */}
        <div
          className="
            h-16
            w-16
            animate-spin
            rounded-full
            border-[3px]
            border-yellow-100
            border-t-yellow-400
            dark:border-slate-700
            dark:border-t-yellow-400
          "
        />

        {/* Star */}
        <img
          src={StarFilledIcon}
          alt="Loading"
          className="
            absolute
            h-7
            w-7
          "
        />
      </div>
    </div>
  );
};

export default Loader;