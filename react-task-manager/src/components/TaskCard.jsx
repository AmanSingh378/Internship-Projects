import { useState } from "react";

function TaskCard({
  task,
  onToggleTask,
  onDeleteTask,
  onEditTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleSave = () => {
    const title = editedTitle.trim();

    if (!title) {
      return;
    }

    onEditTask(task.id, title);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(task.title);
    setIsEditing(false);
  };

  const handleEditKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSave();
    }

    if (event.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <div className="task-card">
      {isEditing ? (
        <div className="edit-container">
          <input
            type="text"
            value={editedTitle}
            onChange={(event) => setEditedTitle(event.target.value)}
            onKeyDown={handleEditKeyDown}
            aria-label="Edit task"
            autoFocus
          />

          <div className="edit-actions">
            <button
              type="button"
              className="save-button"
              onClick={handleSave}
            >
              Save
            </button>

            <button
              type="button"
              className="cancel-button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="task-content">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
              aria-label={`Mark "${task.title}" as ${
                task.completed ? "active" : "completed"
              }`}
            />

            <span className={task.completed ? "completed" : ""}>
              {task.title}
            </span>
          </div>

          <div className="task-actions">
            <button
              type="button"
              className="edit-button"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>

            <button
              type="button"
              className="delete-button"
              onClick={() => onDeleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskCard;