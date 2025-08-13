'use client';

import React from "react";
import { Note } from "@/types/note";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import css from '../NotePreview.module.css';

interface NotePreviewProps {
  note: Note;
}

export default function NotePreview({ note }: NotePreviewProps) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
    <div className={css.container}>
        <div className={css.item}>
          <button className={css.backBtn} onClick={handleClose}>
        Back
      </button>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>

          <p className={css.content}>{note.content}</p>
          <p className={css.date}>{note.updatedAt ?? note.createdAt}</p>
        </div>
        {<p className={css.tag}>{note.tag}</p>}
    </div>
  </Modal>
  );
}
