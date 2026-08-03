const UpgradeCard = () => {
  return (
    <div className="px-4 pb-4">
      <button
        className="
          flex
          w-full
          items-center
          justify-between

          rounded-2xl
          border
          border-yellow-100

          bg-yellow-50

          px-2
          py-2

          transition-all
          duration-300

          hover:shadow-md
        "
      >
        <div className="flex items-center gap-2">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-xl

              bg-yellow-100
            "
          >
            👑
          </div>

          <div className="text-left">
            <h4 className="font-semibold">
              Upgrade to Pro
            </h4>

            <p className="text-sm text-slate-500">
              Unlock more features
            </p>
          </div>
        </div>

        <span className="text-xl text-slate-400">
          ›
        </span>
      </button>
    </div>
  );
};

export default UpgradeCard;