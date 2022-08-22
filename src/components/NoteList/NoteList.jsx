import "./NoteList.sass";
import { BiCopy, BiTrashAlt } from "react-icons/bi";

import { useSelector, useDispatch } from "react-redux";

function NoteList() {
  const notes = useSelector((state) => state.notes.items);

  return (
    <div className="container">
      <div className="d-flex flex-wrap my-4 gap-3 justify-content-center align-items-center">
        {notes.map((item, index) => (
          <div key={index} className={"notes__box rounded-3 " + item.color}>
            <div className="notes__box-header">
              <BiCopy size={24} />
              <BiTrashAlt size={24} />
            </div>
            <div className="notes__box-body">
              <textarea>{item.note}</textarea>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteList;
