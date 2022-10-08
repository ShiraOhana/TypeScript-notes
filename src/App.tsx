import React, { useState } from "react";
import { StringLiteral } from "typescript";
import "./App.css";
import { Note } from "./models/note.models";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import CreateNotes from "./components/CreateNotes";
import { Col, Container, Row } from "react-bootstrap";

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

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
