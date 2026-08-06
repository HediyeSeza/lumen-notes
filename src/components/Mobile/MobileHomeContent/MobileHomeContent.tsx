import { useMemo, useState } from "react";

import MobileTopBar from "../MobileTopBar/MobileTopBar";
import MobileSearchSection from "../MobileSearchSection/MobileSearchSection";
import MobileNoteCard from "../MobileNoteCard/MobileNoteCard";
import FloatingActionButton from "../FloatingActionButton/FloatingActionButton";
import MobileBottomNavigation from "../MobileBottomNavigation/MobileBottomNavigation";

import EditNoteModal from "../../EditNote/EditNoteModal";
import DeleteNoteModal from "../../DeleteNote/DeleteNoteModal";

import type { Note } from "../../../types/note";
import type { SortOption } from "../../SearchBar/SortDropdown";

type MobileHomeContentProps = {
  notes: Note[];

  fetchNotes: () => Promise<void>;

  showToast: (
    message: string,
    type?: "success" | "error" | "warning" | "info"
  ) => void;
};

const MobileHomeContent = ({
  notes,
  fetchNotes,
  showToast,
}: MobileHomeContentProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [sortBy, setSortBy] =
    useState<SortOption>("newest");

  const [selectedNote, setSelectedNote] =
    useState<Note | null>(null);

  const [isEditOpen, setIsEditOpen] =
    useState(false);

  const [isDeleteOpen, setIsDeleteOpen] =
    useState(false);

  const filteredNotes = useMemo(() => {
    const keyword = searchTerm
      .toLowerCase()
      .trim();

    let result = notes.filter(
      (note) =>
        note.title
          .toLowerCase()
          .includes(keyword) ||
        note.content
          .toLowerCase()
          .includes(keyword)
    );

    switch (sortBy) {
      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
        );
        break;

      case "oldest":
        result.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() -
            new Date(b.createdAt).getTime()
        );
        break;

      case "az":
        result.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;

      case "za":
        result.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;
    }

    return result;
  }, [notes, searchTerm, sortBy]);

  const handleEdit = (note: Note) => {
    setSelectedNote(note);
    setIsEditOpen(true);
  };

  const handleDelete = (note: Note) => {
    setSelectedNote(note);
    setIsDeleteOpen(true);
  };

  return (
    <div
      className="
        min-h-screen
        bg-[#FFFDF5]
        pb-28

        dark:bg-slate-950
      "
    >
      <MobileTopBar />

      <MobileSearchSection
        searchValue={searchTerm}
        onSearchChange={setSearchTerm}
        notesCount={filteredNotes.length}
        sortValue={sortBy}
        onSortChange={setSortBy}
      />

      <main className="space-y-4 px-4 py-6">
        {filteredNotes.map((note) => (
          <MobileNoteCard
            key={note.id}
            title={note.title}
            description={note.content}
            category="Personal"
            time={new Date(
              note.createdAt
            ).toLocaleDateString()}
            favorite={false}
            onEdit={() => handleEdit(note)}
            onDelete={() =>
              handleDelete(note)
            }
          />
        ))}
      </main>

      <FloatingActionButton
        fetchNotes={fetchNotes}
        showToast={showToast}
      />

      <MobileBottomNavigation />

      {selectedNote && (
        <>
          <EditNoteModal
            isOpen={isEditOpen}
            onClose={() =>
              setIsEditOpen(false)
            }
            note={selectedNote}
            fetchNotes={fetchNotes}
            showToast={showToast}
          />

          <DeleteNoteModal
  isOpen={isDeleteOpen}
  onClose={() => setIsDeleteOpen(false)}
  note={selectedNote}
  fetchNotes={fetchNotes}
  showToast={showToast}
/>
        </>
      )}
    </div>
  );
};

export default MobileHomeContent;