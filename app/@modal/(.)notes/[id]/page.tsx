import { fetchNoteById } from '@/lib/api';
import type { Note } from '@/types/note';
import NoteModalClient from './NotePreview';

interface PageProps {
  note: Note;
}

export async function getProps(context: { params: { id: string } }) {
  const { id } = context.params;
  const note: Note = await fetchNoteById(id);

  return {
    props: {
      note,
    },
  };
}

export default function Page({ note }: PageProps) {
  return <NoteModalClient note={note} />;
}
