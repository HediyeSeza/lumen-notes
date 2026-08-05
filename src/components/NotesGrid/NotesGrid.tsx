import NoteCard from "../NoteCard/NoteCard";
import type { Note } from "../../types/note";

type NotesGridProps = {
  notes: Note[];
};

const NotesGrid = ({ notes }: NotesGridProps) => {
  return (
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
        />
      ))}
    </div>
  );
};

export default NotesGrid;
