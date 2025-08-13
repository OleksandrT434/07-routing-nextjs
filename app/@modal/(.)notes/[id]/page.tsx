import { fetchNoteById } from '@/lib/api';
import type { Note } from '@/types/note';
import NoteModalClient from './NotePreview';


type PageProps = {
  params: { id: string };
};

export default async function Page({ params }: PageProps) {
  const { id } = params;
  const note: Note = await fetchNoteById(id);

  return <NoteModalClient note={note} />;
}