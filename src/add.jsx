import { useState } from "react";
import "./index.css";

function AddButton({ onAddTask }) {
  const [openPop, setPop] = useState(false);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  // Handle form submission
  const HandleSubmit = (e) => {
    e.preventDefault();

    // Pass the new task to the parent component
    const newTask = { task, date };
    onAddTask(newTask);

    // Reset the form fields
    setTask("");
    setDate("");

    // Close the popup
    setPop(false);
  };

  // Toggle the popup visibility
  const togglePopup = () => {
    setPop(!openPop);
  };

  return (
    <>
      <div className="addButton" onClick={togglePopup}>
        <p className="Plus">+</p>
      </div>
      {openPop && (
        <div className="popup">
          <form onSubmit={HandleSubmit}>
            <label htmlFor="task">Enter Task</label>
            <input
              id="task"
              required
              value={task}
              onChange={(e) => setTask(e.target.value)}
              type="text"
            />
            <label htmlFor="duedate">Enter Due Date</label>
            <input
              id="duedate"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default AddButton;
