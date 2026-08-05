import { useState } from "react";

import NoteCard from "../NoteCard/NoteCard";
import EditNoteModal from "../EditNote/EditNoteModal";
import DeleteNoteModal from "../DeleteNote/DeleteNoteModal";

import type { Note } from "../../types/note";

type NotesGridProps = {
  notes: Note[];
  fetchNotes: () => Promise<void>;
};

const NotesGrid = ({
  notes,
  fetchNotes,
}: NotesGridProps) => {
  // Edit
  const [isEditOpen, setIsEditOpen] = useState(false);

  // Delete
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [selectedNote, setSelectedNote] =
    useState<Note | null>(null);

  // Edit
  const handleOpenEdit = (note: Note) => {
    setSelectedNote(note);
    setIsEditOpen(true);
  };

  const handleCloseEdit = () => {
    setSelectedNote(null);
    setIsEditOpen(false);
  };

  // Delete
  const handleOpenDelete = (note: Note) => {
    setSelectedNote(note);
    setIsDeleteOpen(true);
  };

  const handleCloseDelete = () => {
    setSelectedNote(null);
    setIsDeleteOpen(false);
  };

  return (
    <>
      <div
        className="
          mt-8
          grid
          grid-cols-1
          gap-4

          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            title={note.title}
            description={note.content}
            category="Personal"
            time={new Date(note.createdAt).toLocaleDateString()}
            favorite={false}
            onEdit={() => handleOpenEdit(note)}
            onDelete={() => handleOpenDelete(note)}
          />
        ))}
      </div>

      {selectedNote && (
        <>
          <EditNoteModal
            isOpen={isEditOpen}
            onClose={handleCloseEdit}
            note={selectedNote}
            fetchNotes={fetchNotes}
          />

          <DeleteNoteModal
            isOpen={isDeleteOpen}
            onClose={handleCloseDelete}
            note={selectedNote}
            fetchNotes={fetchNotes}
          />
        </>
      )}
    </>
  );
};

export default NotesGrid;