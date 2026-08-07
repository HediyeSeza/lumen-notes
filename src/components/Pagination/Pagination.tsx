import { ChevronDownIcon } from "../../assets/icons";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      {/* Previous */}
      <button
        onClick={() =>
          onPageChange(currentPage - 1)
        }
        disabled={currentPage === 1}
        className="
          flex
          h-12
          w-12
          cursor-pointer
          items-center
          justify-center

          rounded-xl
          border
          border-slate-200
          bg-white

          transition-all
          duration-300

          hover:border-yellow-400
          hover:bg-yellow-100
          hover:scale-105

          active:scale-95

          disabled:cursor-not-allowed
          disabled:opacity-40

          dark:border-slate-700
          dark:bg-slate-900
          dark:hover:bg-slate-800
        "
      >
        <img
          src={ChevronDownIcon}
          alt="Previous"
          className="h-5 w-5 rotate-90"
        />
      </button>

      {/* Page Numbers */}
      {Array.from(
        { length: totalPages },
        (_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              disabled={
                currentPage === page
              }
              onClick={() =>
                onPageChange(page)
              }
              className={`
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-xl

                font-semibold

                transition-all
                duration-300

                ${
                  currentPage === page
                    ? `
                      cursor-default
                      bg-yellow-400
                      text-slate-900
                      shadow-md
                    `
                    : `
                      cursor-pointer

                      border
                      border-slate-200
                      bg-white
                      text-slate-700

                      hover:border-yellow-400
                      hover:bg-yellow-100
                      hover:scale-105

                      active:scale-95

                      dark:border-slate-700
                      dark:bg-slate-900
                      dark:text-slate-200
                      dark:hover:bg-slate-800
                    `
                }
              `}
            >
              {page}
            </button>
          );
        }
      )}

      {/* Next */}
      <button
        onClick={() =>
          onPageChange(currentPage + 1)
        }
        disabled={
          currentPage === totalPages
        }
        className="
          flex
          h-12
          w-12
          cursor-pointer
          items-center
          justify-center

          rounded-xl
          border
          border-slate-200
          bg-white

          transition-all
          duration-300

          hover:border-yellow-400
          hover:bg-yellow-100
          hover:scale-105

          active:scale-95

          disabled:cursor-not-allowed
          disabled:opacity-40

          dark:border-slate-700
          dark:bg-slate-900
          dark:hover:bg-slate-800
        "
      >
        <img
          src={ChevronDownIcon}
          alt="Next"
          className="h-5 w-5 -rotate-90"
        />
      </button>
    </div>
  );
};

export default Pagination;