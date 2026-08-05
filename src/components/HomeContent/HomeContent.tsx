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
  return (
    <>
      <TopBar
        fetchNotes={fetchNotes}
        notesCount={notes.length}
        showToast={showToast}
      />

      <div className="px-6 py-8 lg:px-10">
        <SearchSection />

        <NotesGrid
          notes={notes}
          fetchNotes={fetchNotes}
          showToast={showToast}
        />
      </div>
    </>
  );
};

export default HomeContent;