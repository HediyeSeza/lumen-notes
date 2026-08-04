import NoteCard from "../NoteCard/NoteCard";
import { notes } from "../../assets/data/noteData";

const NotesGrid = () => {
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
          description={note.description}
          category={note.category}
          time={note.time}
          favorite={note.favorite}
        />
      ))}
    </div>
  );
};

export default NotesGrid;