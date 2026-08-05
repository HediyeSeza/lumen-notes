import { useEffect, useState } from "react";

import { getNotes } from "../api/notes";
import type { Note } from "../types/note";

import HomeContent from "../components/HomeContent/HomeContent";

const Home = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <HomeContent
      notes={notes}
      fetchNotes={fetchNotes}
    />
  );
};

export default Home;