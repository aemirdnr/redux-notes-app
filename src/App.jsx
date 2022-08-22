import AddNote from "./components/AddNote/AddNote";
import Header from "./components/Header/Header";
import NoteList from "./components/NoteList/NoteList";
import Search from "./components/Search/Search";

function App() {
  return (
    <>
      <Header />
      <Search />
      <AddNote />
      <NoteList />
    </>
  );
}

export default App;
