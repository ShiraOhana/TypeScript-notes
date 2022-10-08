import * as React from "react";
import { Note } from "../models/note.models";

// Type of props for the TS -> Created on models
interface INotesListProps {
  notes: Note[];
}

const NotesList: React.FunctionComponent<INotesListProps> = (props) => {
  return (
    <>
      <h2 className="mt-3">Notes</h2>
    </>
  );
};

export default NotesList;
