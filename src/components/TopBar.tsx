import { useState } from "react";

import {
  BellIcon,
  PlusIcon,
} from "../assets/icons";

import CreateNoteModal from "./CreateNote/CreateNoteModal";

type TopBarProps = {
  fetchNotes: () => Promise<void>;
  notesCount: number;
  showToast: (
    message: string,
    type?: "success" | "error" | "warning" | "info"
  ) => void;
};

const TopBar = ({
  fetchNotes,
  notesCount,
  showToast,
}: TopBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className="
          border-b
          border-yellow-200
          bg-[#FFFDF5]
          dark:border-slate-800
          dark:bg-slate-900
        "
      >
        <div
          className="
            flex
            items-center
            justify-between

            px-2
            pt-2
            pb-2

            md:px-8
            lg:px-10
          "
        >
          {/* Left */}
          <div>
            <h1
              className="
                text-3xl
                font-bold
                leading-tight
                text-slate-900
                dark:text-white
              "
            >
              All Notes <span className="text-yellow-400">✨</span>
            </h1>

            <p
              className="
                mt-1
                text-sm
                text-gray-500
                dark:text-slate-400
              "
            >
              {notesCount} notes in total
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(true)}
              className="
                flex
                h-12
                items-center
                gap-2
                rounded-xl
                bg-yellow-400
                px-4
                font-semibold
                transition-all
                duration-300
                hover:bg-yellow-500
                hover:shadow-lg
              "
            >
              <img
                src={PlusIcon}
                alt="Plus"
                className="h-6 w-6"
              />

              <span className="hidden sm:block">
                New Note
              </span>
            </button>

            <button
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-yellow-300
                bg-white
                transition-all
                duration-300
                hover:bg-yellow-400
                hover:shadow-md
                dark:border-slate-700
                dark:bg-slate-800
              "
            >
              <img
                src={BellIcon}
                alt="Bell"
                className="h-5 w-5"
              />
            </button>
          </div>
        </div>
      </header>

      <CreateNoteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        fetchNotes={fetchNotes}
        showToast={showToast}
      />
    </>
  );
};

export default TopBar;