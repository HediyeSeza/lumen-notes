import { useEffect, useState } from "react";

import { updateNote } from "../../api/notes";

import type { Note } from "../../types/note";

import Modal from "../Modal/Modal";
import CategorySelect from "../CreateNote/CategorySelect";

type EditNoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  note: Note;
  fetchNotes: () => Promise<void>;
};

const EditNoteModal = ({
  isOpen,
  onClose,
  note,
  fetchNotes,
}: EditNoteModalProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Personal");

  useEffect(() => {
    if (!note) return;

    setTitle(note.title);
    setContent(note.content);
    setCategory("Personal");
  }, [note]);

  const resetForm = () => {
    setTitle("");
    setContent("");
    setCategory("Personal");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleUpdate = async () => {
    if (title.trim().length < 3) return;

    if (content.trim().length < 10) return;

    try {
      await updateNote(note.id, title, content);

      await fetchNotes();

      handleClose();
    } catch (error) {
      console.error("Failed to update note:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
    >
      <h2
        className="
          mb-6
          text-2xl
          font-bold
          text-slate-900
          dark:text-white
        "
      >
        Edit Note
      </h2>

      <div className="space-y-5">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            px-4
            py-3
            text-slate-900
            dark:text-white
            placeholder:text-slate-400
            dark:placeholder:text-slate-500
            outline-none
            transition-colors
            focus:border-yellow-400
          "
        />

        <textarea
          rows={5}
          placeholder="Description"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            px-4
            py-3
            text-slate-900
            dark:text-white
            placeholder:text-slate-400
            dark:placeholder:text-slate-500
            outline-none
            resize-none
            transition-colors
            focus:border-yellow-400
          "
        />

        <CategorySelect
          value={category}
          onChange={setCategory}
        />
      </div>

      <div className="mt-8 flex justify-end gap-3">
        <button
          onClick={handleClose}
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
            duration-200
            hover:border-slate-400
            dark:hover:border-slate-500
          "
        >
          Cancel
        </button>

        <button
          onClick={handleUpdate}
          disabled={
            title.trim().length < 3 ||
            content.trim().length < 10
          }
          className="
            rounded-xl
            bg-yellow-400
            px-5
            py-2
            font-medium
            text-slate-900
            transition-all
            duration-200
            hover:bg-yellow-500
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          Update
        </button>
      </div>
    </Modal>
  );
};

export default EditNoteModal;