import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = taskTitle.trim();

    if (!title) {
      return;
    }

    onAddTask(title);
    setTaskTitle("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={taskTitle}
        onChange={(event) => setTaskTitle(event.target.value)}
        aria-label="Task title"
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;