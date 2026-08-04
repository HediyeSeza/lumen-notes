import NoteCard from "../NoteCard/NoteCard";
import { notes } from "../../assets/data/noteData";

const NotesGrid = () => {
  return (
    <div
  className="
  mt-8
  grid
  gap-4
  grid-cols-1
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