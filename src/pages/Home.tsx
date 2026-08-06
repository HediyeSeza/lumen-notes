import { useEffect, useState } from "react";

import { getNotes } from "../api/notes";
import type { Note } from "../types/note";

import HomeContent from "../components/HomeContent/HomeContent";
import MobileHomeContent from "../components/Mobile/MobileHomeContent/MobileHomeContent";
import Loader from "../components/Loader/Loader";
import Toast from "../components/Toast/Toast";

const Home = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success" as
      | "success"
      | "error"
      | "warning"
      | "info",
  });

  const fetchNotes = async () => {
    setLoading(true);

    try {
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      console.error(
        "Failed to fetch notes:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const showToast = (
    message: string,
    type:
      | "success"
      | "error"
      | "warning"
      | "info" = "success"
  ) => {
    setToast({
      show: true,
      message,
      type,
    });

    setTimeout(() => {
      setToast((prev) => ({
        ...prev,
        show: false,
      }));
    }, 2500);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <HomeContent
          notes={notes}
          fetchNotes={fetchNotes}
          showToast={showToast}
        />
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <MobileHomeContent
          notes={notes}
          fetchNotes={fetchNotes}
          showToast={showToast}
        />
      </div>

      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
      />
    </>
  );
};

export default Home;