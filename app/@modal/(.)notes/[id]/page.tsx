
import { fetchNoteById } from '@/lib/api';
import NoteModalClient from './NotePreview.client';
import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';

type NoteModalPageProps = {
  params: Promise<{ id: string }>;
};

export default async function NoteModalPage({ params }: NoteModalPageProps) {
  const { id } = await params;

  const queryClient = new QueryClient();

  const note = await fetchNoteById(id);
  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => note,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteModalClient note={note} /> 
    </HydrationBoundary>
  );
}
