import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../Feature/NoteBookSlice";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const [notetext, setNoteText] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addNote(notetext));
      navigate("/");
    }
  };
  return (
    <div>
      <h2>Add a Note</h2>
      <input
        type="text"
        placeholder="Write something here..."
        value={notetext}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button onClick={handleAdd}>Save</button>
    </div>
  );
};

export default AddNote;
