import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../Feature/NoteBookSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const notes = useSelector((state) => state.NoteBook);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>My NoteBook</h2>
      <Link to="/add">Add Note</Link>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.text}
            <button onClick={() => dispatch(deleteNote(note.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
