import { useState } from "react";

import NoteCard from "../NoteCard/NoteCard";
import Loader from "../Loader/Loader";
import EditNoteModal from "../EditNote/EditNoteModal";
import DeleteNoteModal from "../DeleteNote/DeleteNoteModal";
import EmptyState from "../EmptyState";

import type { Note } from "../../types/note";

type NotesGridProps = {
  notes: Note[];
  loading: boolean;
  isSearching: boolean;
  fetchNotes: () => Promise<void>;
  showToast: (
    message: string,
    type?: "success" | "error" | "warning" | "info"
  ) => void;
};

const NotesGrid = ({
  notes,
  loading,
  isSearching,
  fetchNotes,
  showToast,
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

  // Loading
  if (loading) {
    return <Loader />;
  }

  // Empty State
  if (notes.length === 0) {
    return (
      <EmptyState
        title={
          isSearching
            ? "No notes found"
            : "No notes yet"
        }
        description={
          isSearching
            ? "Try searching with another keyword."
            : "Create your first note to start organizing your ideas."
        }
      />
    );
  }

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
            showToast={showToast}
          />

          <DeleteNoteModal
            isOpen={isDeleteOpen}
            onClose={handleCloseDelete}
            note={selectedNote}
            fetchNotes={fetchNotes}
            showToast={showToast}
          />
        </>
      )}
    </>
  );
};

export default NotesGrid;