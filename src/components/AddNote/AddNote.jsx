import "./AddNote.sass";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { addNote } from "../../redux/Notes/notesSlice";

function AddNote() {
  const [note, setNote] = useState("");
  const [color, setColor] = useState("bg-warning");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({ note, color }));
  };

  return (
    <div className="d-flex justify-content-center my-4">
      <div className="notes__area">
        <textarea
          className="notes__text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your note here..."
        ></textarea>
        <div className="d-flex flex-column flex-sm-row justify-content-between gap-3 p-2">
          <div className="d-flex justify-content-center flex-wrap gap-3 p-2">
            <div
              className="bg-danger rounded-pill"
              onClick={() => setColor("bg-danger")}
              style={{
                minWidth: "36px",
                minHeight: "36px",
                cursor: "pointer",
              }}
            ></div>
            <div
              className="bg-info rounded-pill"
              onClick={() => setColor("bg-info")}
              style={{
                minWidth: "36px",
                minHeight: "36px",
                cursor: "pointer",
              }}
            ></div>
            <div
              className="bg-primary rounded-pill"
              onClick={() => setColor("bg-primary")}
              style={{
                minWidth: "36px",
                minHeight: "36px",
                cursor: "pointer",
              }}
            ></div>
            <div
              className="bg-secondary rounded-pill"
              onClick={() => setColor("bg-secondary")}
              style={{
                minWidth: "36px",
                minHeight: "36px",
                cursor: "pointer",
              }}
            ></div>
            <div
              className="bg-warning rounded-pill"
              onClick={() => setColor("bg-warning")}
              style={{
                minWidth: "36px",
                minHeight: "36px",
                cursor: "pointer",
              }}
            ></div>
            <div
              className="bg-dark rounded-pill"
              onClick={() => setColor("bg-dark")}
              style={{
                minWidth: "36px",
                minHeight: "36px",
                cursor: "pointer",
              }}
            ></div>
          </div>
          <button className="bg-info rounded text-light" onClick={handleSubmit}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNote;
