import { api } from "./axios";
import type { Note } from "../types/note";

export const getNotes = async (): Promise<Note[]> => {
  const { data } = await api.get("/api/notes");

  return data.response;
};

export const createNote = async (
  title: string,
  content: string
): Promise<Note> => {
  const { data } = await api.post("/api/notes", {
    title,
    content,
  });

  return data.response;
};

export const updateNote = async (
  id: string,
  title: string,
  content: string
): Promise<Note> => {
  const { data } = await api.put(`/api/notes/${id}`, {
    title,
    content,
  });

  return data.response;
};

export const deleteNote = async (id: string) => {
  const { data } = await api.delete(`/api/notes/${id}`);

  return data;
};