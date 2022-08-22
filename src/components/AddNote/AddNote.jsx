import "./AddNote.sass";

function AddNote() {
  return (
    <div className="d-flex justify-content-center my-4">
      <div className="notes__area">
        <textarea
          className="notes__text"
          placeholder="Enter your note here..."
        ></textarea>
        <div className="d-flex flex-column flex-sm-row justify-content-between gap-3 p-2">
          <div className="d-flex justify-content-center flex-wrap gap-3 p-2">
            <div
              className="bg-danger rounded-pill"
              style={{
                "min-width": "36px",
                "min-height": "36px",
                cursor: "pointer",
              }}
            ></div>
            <div
              className="bg-info rounded-pill"
              style={{
                "min-width": "36px",
                "min-height": "36px",
                cursor: "pointer",
              }}
            ></div>
            <div
              className="bg-primary rounded-pill"
              style={{
                "min-width": "36px",
                "min-height": "36px",
                cursor: "pointer",
              }}
            ></div>
            <div
              className="bg-secondary rounded-pill"
              style={{
                "min-width": "36px",
                "min-height": "36px",
                cursor: "pointer",
              }}
            ></div>
            <div
              className="bg-warning rounded-pill"
              style={{
                "min-width": "36px",
                "min-height": "36px",
                cursor: "pointer",
              }}
            ></div>
            <div
              className="bg-dark rounded-pill"
              style={{
                "min-width": "36px",
                "min-height": "36px",
                cursor: "pointer",
              }}
            ></div>
          </div>
          <button className="bg-info rounded text-light">ADD</button>
        </div>
      </div>
    </div>
  );
}

export default AddNote;
