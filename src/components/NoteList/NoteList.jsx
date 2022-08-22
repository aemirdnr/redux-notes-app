import "./NoteList.sass";

import { BiCopy, BiTrashAlt } from "react-icons/bi";

function NoteList() {
  return (
    <div className="container">
      <div className="d-flex flex-wrap my-4 gap-3 justify-content-center align-items-center">
        <div className="notes__box bg-danger rounded-3">
          <div className="notes__box-header">
            <BiCopy size={24} />
            <BiTrashAlt size={24} />
          </div>
          <div className="notes__box-body">
            <textarea>note</textarea>
          </div>
        </div>
        <div className="notes__box bg-info rounded-3">
          <div className="notes__box-header">
            <BiCopy size={24} />
            <BiTrashAlt size={24} />
          </div>
          <div className="notes__box-body">
            <textarea>note</textarea>
          </div>
        </div>
        <div className="notes__box bg-primary rounded-3">
          <div className="notes__box-header">
            <BiCopy size={24} />
            <BiTrashAlt size={24} />
          </div>
          <div className="notes__box-body">
            <textarea>note</textarea>
          </div>
        </div>
        <div className="notes__box bg-secondary rounded-3">
          <div className="notes__box-header">
            <BiCopy size={24} />
            <BiTrashAlt size={24} />
          </div>
          <div className="notes__box-body">
            <textarea>note</textarea>
          </div>
        </div>
        <div className="notes__box bg-warning rounded-3">
          <div className="notes__box-header">
            <BiCopy size={24} />
            <BiTrashAlt size={24} />
          </div>
          <div className="notes__box-body">
            <textarea>note</textarea>
          </div>
        </div>
        <div className="notes__box bg-dark rounded-3">
          <div className="notes__box-header">
            <BiCopy size={24} />
            <BiTrashAlt size={24} />
          </div>
          <div className="notes__box-body">
            <textarea>
              notenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenote
              notenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenotenote
            </textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteList;
