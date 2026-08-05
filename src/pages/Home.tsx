import { useEffect, useState } from "react";

import { getNotes } from "../api/notes";
import type { Note } from "../types/note";

import SearchSection from "../components/SearchBar/SearchSection";
import NotesGrid from "../components/NotesGrid/NotesGrid";

const Home = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  // 👇 این تابع از useEffect جدا شده
  const fetchNotes = async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    }
  };

  // 👇 فقط بار اول کامپوننت اجرا میشه
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <SearchSection />

      <NotesGrid notes={notes} />
    </>
  );
};

export default Home;