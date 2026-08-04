import { useState } from "react";

import Modal from "../Modal/Modal";
import CategorySelect from "./CategorySelect";

type CreateNoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateNoteModal = ({
  isOpen,
  onClose,
}: CreateNoteModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Personal");

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setCategory("Personal");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleCreate = () => {
    if (!title.trim()) return;
    console.log({
      title,
      description,
      category,
    });

    resetForm();
    onClose();
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
        Create Note
      </h2>

      <div className="space-y-5">
        {/* Title */}
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

        {/* Description */}
        <textarea
          rows={5}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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

        {/* Category */}
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
          onClick={handleCreate}
          disabled={!title.trim()}
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
          Create
        </button>
      </div>
    </Modal>
  );
};

export default CreateNoteModal;