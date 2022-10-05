import React, { useState } from "react";
import { StringLiteral } from "typescript";
import "./App.css";
import { Note } from "./models/note.models";

function App() {
  // Note[] structure (interface) is in "models" folder
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "Schedual meeting with the team",
      color: "#dfdfdf",
      date: new Date().toDateString(),
    },
  ]);

  return <div className="App">App</div>;
}

export default App;
