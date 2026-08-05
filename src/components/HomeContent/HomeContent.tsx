import { useMemo, useState } from "react";

import TopBar from "../TopBar";
import SearchSection from "../SearchBar/SearchSection";
import NotesGrid from "../NotesGrid/NotesGrid";

import type { Note } from "../../types/note";
import type { SortOption } from "../SearchBar/SortDropdown";

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
  const [sortBy, setSortBy] =
    useState<SortOption>("newest");

  const filteredAndSortedNotes = useMemo(() => {
    const keyword = searchTerm.toLowerCase().trim();

    let result = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(keyword) ||
        note.content.toLowerCase().includes(keyword)
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

  return (
    <>
      <TopBar
        fetchNotes={fetchNotes}
        notesCount={filteredAndSortedNotes.length}
        showToast={showToast}
      />

      <div className="px-6 py-8 lg:px-10">
        <SearchSection
          searchValue={searchTerm}
          onSearchChange={setSearchTerm}
          sortValue={sortBy}
          onSortChange={setSortBy}
        />

        <NotesGrid
          notes={filteredAndSortedNotes}
          fetchNotes={fetchNotes}
          showToast={showToast}
        />
      </div>
    </>
  );
};

export default HomeContent;