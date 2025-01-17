import { useState } from "react";
import "./App.css";
import AddButton from "./add";

function App() {
  const [tasks, setTasks] = useState([]); // Store tasks here

  // Function to handle adding a task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]); // Add the new task to the tasks array
  };

  return (
    <div>
      <h1>Task Manager</h1>

      {/* Render tasks */}
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <div className="task-container">
                <div className="task-item" >
                  <span  className="task-text">Task:{task.task} </span>
              <span  className="task-date"> Due Date: {task.date}</span>
                </div>
              </div>
              
            </li>
          ))}
        </ul>
      ) : (
        <p>No New Task Added</p>
      )}

      {/* AddButton component, passing down the handleAddTask function */}
      <AddButton onAddTask={handleAddTask} />
    </div>
  );
}

export default App;
