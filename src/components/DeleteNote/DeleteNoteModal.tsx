import { deleteNote } from "../../api/notes";

import type { Note } from "../../types/note";

import Modal from "../Modal/Modal";

type DeleteNoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  note: Note;
  fetchNotes: () => Promise<void>;
  showToast: (
    message: string,
    type?: "success" | "error" | "warning" | "info"
  ) => void;
};

const DeleteNoteModal = ({
  isOpen,
  onClose,
  note,
  fetchNotes,
  showToast,
}: DeleteNoteModalProps) => {
  const handleDelete = async () => {
    try {
      await deleteNote(note.id);

      await fetchNotes();

      showToast(
        "Note deleted successfully",
        "success"
      );

      onClose();
    } catch (error) {
      console.error("Failed to delete note:", error);

      showToast(
        "Failed to delete note",
        "error"
      );
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <h2
        className="
          mb-6
          text-3xl
          font-bold
          text-slate-900
          dark:text-white
        "
      >
        Delete Note
      </h2>

      <p
        className="
          mb-8
          text-base
          leading-7
          text-slate-600
          dark:text-slate-300
        "
      >
        Are you sure you want to delete{" "}
        <span className="font-semibold">
          "{note.title}"
        </span>
        ? This action cannot be undone.
      </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="
            cursor-pointer

            rounded-xl
            border
            border-slate-300

            bg-white
            px-5
            py-2

            font-medium
            text-slate-700

            transition-all
            duration-200

            hover:border-slate-400

            dark:border-slate-700
            dark:bg-slate-800
            dark:text-slate-200
            dark:hover:border-slate-500
          "
        >
          Cancel
        </button>

        <button
          onClick={handleDelete}
          className="
            cursor-pointer

            rounded-xl

            px-5
            py-2

            font-medium

            text-red-500
            dark:text-red-400

            transition-all
            duration-200

            hover:bg-red-50
            hover:text-red-600

            dark:hover:bg-red-500/10
            dark:hover:text-red-500
          "
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default DeleteNoteModal;