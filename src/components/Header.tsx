const Header = () => {
  return (
    <header className="border-b border-yellow-100 bg-[#FFFDF5]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <img
            src="/Star.png"
            alt="Lumen"
            className="h-12 w-12 sm:h-14 sm:w-14"
          />

          <div>
            <h1 className="text-xl font-bold sm:text-2xl">
              Lumen
            </h1>

            <p className="hidden text-sm text-gray-500 sm:block">
              Light up your ideas
            </p>
          </div>
        </div>

        <button
          className="
            rounded-xl
            bg-yellow-400
            px-4
            py-2
            text-sm
            font-semibold
            transition
            hover:bg-yellow-500
            sm:px-5
            sm:py-3
            sm:text-base
          "
        >
          + New Note
        </button>
      </div>
    </header>
  );
};

export default Header;