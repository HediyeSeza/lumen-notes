import { useState } from "react";

import NoteCard from "../NoteCard/NoteCard";
import EditNoteModal from "../EditNote/EditNoteModal";

import type { Note } from "../../types/note";

type NotesGridProps = {
  notes: Note[];
  fetchNotes: () => Promise<void>;
};

const NotesGrid = ({
  notes,
  fetchNotes,
}: NotesGridProps) => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [selectedNote, setSelectedNote] =
    useState<Note | null>(null);

  const handleOpenEdit = (note: Note) => {
    setSelectedNote(note);
    setIsEditOpen(true);
  };

  const handleCloseEdit = () => {
    setSelectedNote(null);
    setIsEditOpen(false);
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
          />
        ))}
      </div>

      {selectedNote && (
        <EditNoteModal
          isOpen={isEditOpen}
          onClose={handleCloseEdit}
          note={selectedNote}
          fetchNotes={fetchNotes}
        />
      )}
    </>
  );
};

export default NotesGrid;