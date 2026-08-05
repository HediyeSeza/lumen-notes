import { deleteNote } from "../../api/notes";

import type { Note } from "../../types/note";

import Modal from "../Modal/Modal";

type DeleteNoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  note: Note;
  fetchNotes: () => Promise<void>;
};

const DeleteNoteModal = ({
  isOpen,
  onClose,
  note,
  fetchNotes,
}: DeleteNoteModalProps) => {
  const handleDelete = async () => {
    try {
      await deleteNote(note.id);

      await fetchNotes();

      onClose();
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <h2
        className="
          mb-4
          text-2xl
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
            rounded-xl
            border
            border-slate-300
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            px-5
            py-2
            font-medium
            text-slate-700
            dark:text-slate-200
            transition-all
            hover:border-slate-400
          "
        >
          Cancel
        </button>

        <button
          onClick={handleDelete}
          className="
            rounded-xl
            bg-red-500
            px-5
            py-2
            font-medium
            text-white
            transition-all
            hover:bg-red-600
          "
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default DeleteNoteModal;