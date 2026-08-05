import { useMemo, useState } from "react";

import TopBar from "../TopBar";
import SearchSection from "../SearchBar/SearchSection";
import NotesGrid from "../NotesGrid/NotesGrid";

import type { Note } from "../../types/note";

type HomeContentProps = {
  notes: Note[];
  fetchNotes: () => Promise<void>;
  showToast: (
    message: string,
    type?: "success" | "error" | "warning" | "info"
  ) => void;
};

const HomeContent = ({
  notes,
  fetchNotes,
  showToast,
}: HomeContentProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotes = useMemo(() => {
    if (!searchTerm.trim()) return notes;

    const keyword = searchTerm.toLowerCase();

    return notes.filter(
      (note) =>
        note.title.toLowerCase().includes(keyword) ||
        note.content.toLowerCase().includes(keyword)
    );
  }, [notes, searchTerm]);

  return (
    <>
      <TopBar
        fetchNotes={fetchNotes}
        notesCount={filteredNotes.length}
        showToast={showToast}
      />

      <div className="px-6 py-8 lg:px-10">
        <SearchSection
          value={searchTerm}
          onChange={setSearchTerm}
        />

        <NotesGrid
          notes={filteredNotes}
          fetchNotes={fetchNotes}
          showToast={showToast}
        />
      </div>
    </>
  );
};

export default HomeContent;