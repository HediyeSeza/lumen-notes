import { useEffect, useMemo, useState } from "react";

import TopBar from "../TopBar";
import SearchSection from "../SearchBar/SearchSection";
import NotesGrid from "../NotesGrid/NotesGrid";
import Sidebar from "../Sidebar/Sidebar";
import Pagination from "../Pagination";

import type { Note } from "../../types/note";
import type { SortOption } from "../SearchBar/SortDropdown";

type HomeContentProps = {
  notes: Note[];
  loading: boolean;
  fetchNotes: () => Promise<void>;
  showToast: (
    message: string,
    type?: "success" | "error" | "warning" | "info"
  ) => void;
};

const NOTES_PER_PAGE = 9;

const HomeContent = ({
  notes,
  loading,
  fetchNotes,
  showToast,
}: HomeContentProps) => {
  const [searchTerm, setSearchTerm] =
    useState("");

  const [sortBy, setSortBy] =
    useState<SortOption>("newest");

  const [currentPage, setCurrentPage] =
    useState(1);

  const filteredAndSortedNotes = useMemo(() => {
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

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy]);

  const totalPages = Math.ceil(
    filteredAndSortedNotes.length /
      NOTES_PER_PAGE
  );

  const currentNotes =
    filteredAndSortedNotes.slice(
      (currentPage - 1) * NOTES_PER_PAGE,
      currentPage * NOTES_PER_PAGE
    );

  return (
    <div className="flex min-h-screen">
      <Sidebar
        notesCount={filteredAndSortedNotes.length}
        favoritesCount={0}
        trashCount={0}
      />

      <div className="flex min-h-screen flex-1 flex-col">
        <TopBar
          fetchNotes={fetchNotes}
          notesCount={
            filteredAndSortedNotes.length
          }
          showToast={showToast}
        />

        <div
  className="
    flex
    min-h-[calc(100vh-88px)]
    flex-col
    px-6
    py-8
    lg:px-10
  "
>
  <SearchSection
    searchValue={searchTerm}
    onSearchChange={setSearchTerm}
    sortValue={sortBy}
    onSortChange={setSortBy}
  />

  <div className="flex-1">
    <NotesGrid
      notes={currentNotes}
      loading={loading}
      isSearching={
        searchTerm.trim().length > 0
      }
      fetchNotes={fetchNotes}
      showToast={showToast}
    />
  </div>

  <div className="mt-auto pt-8">
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  </div>
</div>
      </div>
    </div>
  );
};

export default HomeContent;