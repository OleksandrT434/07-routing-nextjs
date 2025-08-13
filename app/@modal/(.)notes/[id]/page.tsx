import { fetchNoteById } from '@/lib/api';
import type { Note } from '@/types/note';
import NoteModalClient from './NotePreview';

type Props = {
  params: { id: string };
};

export default async function NoteModalPage({ params }: Props) {
  const { id } = params;
  const note: Note = await fetchNoteById(id);

  return <NoteModalClient note={note} />;
}