import { useState } from "react";

import { PlusIcon } from "../../../assets/icons";
import CreateNoteModal from "../../CreateNote/CreateNoteModal";

type FloatingActionButtonProps = {
  fetchNotes: () => Promise<void>;
  showToast: (
    message: string,
    type?: "success" | "error" | "warning" | "info"
  ) => void;
};

const FloatingActionButton = ({
  fetchNotes,
  showToast,
}: FloatingActionButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="
          fixed
          bottom-24
          right-5

          z-50

          flex
          h-16
          w-16

          items-center
          justify-center

          rounded-full

          bg-yellow-400

          shadow-xl

          transition-all
          duration-300

          hover:scale-105
          active:scale-95

          dark:bg-yellow-500
        "
      >
        <img
          src={PlusIcon}
          alt="New Note"
          className="h-7 w-7"
        />
      </button>

      <CreateNoteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        fetchNotes={fetchNotes}
        showToast={showToast}
      />
    </>
  );
};

export default FloatingActionButton;