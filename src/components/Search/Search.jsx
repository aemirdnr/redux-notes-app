import "./Search.sass";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { updateFilter } from "../../redux/Notes/notesSlice";

function Search() {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateFilter(filter));
  }, [filter]);

  return (
    <div className="d-flex justify-content-center mt-4">
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="notes__search"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
