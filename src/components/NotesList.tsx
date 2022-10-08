import * as React from "react";
import { Note } from "../models/note.models";
import Notes from "../components/Notes";

// Type of props for the TS -> Created on models
interface INotesListProps {
  notes: Note[];
}

const NotesList: React.FunctionComponent<INotesListProps> = ({ notes }) => {
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return <Notes key={note.id} note={note} />;
    });
  };

  return (
    <>
      <h2 className="mt-3">Notes</h2>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
