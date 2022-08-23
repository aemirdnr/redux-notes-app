import "./NoteList.sass";
import { BiCopy, BiTrashAlt } from "react-icons/bi";

import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../../redux/Notes/notesSlice";

function NoteList() {
  const notes = useSelector((state) => state.notes.items);
  const filter = useSelector((state) => state.notes.filter);
  const dispatch = useDispatch();

  let filteredItems = filter
    ? notes.filter((item) => item.note.toLowerCase().includes(filter))
    : notes;

  return (
    <div className="container">
      <div className="d-flex flex-wrap my-4 gap-3 justify-content-center align-items-center">
        {filteredItems.map((item, index) => (
          <div key={index} className={"notes__box rounded-3 " + item.color}>
            <div className="notes__box-header">
              <BiCopy
                onClick={() => navigator.clipboard.writeText(item.note)}
                size={24}
              />
              <BiTrashAlt
                onClick={() => dispatch(deleteNote(item.id))}
                size={24}
              />
            </div>
            <div className="notes__box-body">
              <textarea value={item.note} readOnly></textarea>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteList;
