import TaskCard from "./TaskCard";

function TaskList({
  tasks,
  filter,
  onToggleTask,
  onDeleteTask,
  onEditTask,
}) {
  if (tasks.length === 0) {
    const emptyMessages = {
      all: {
        title: "No tasks yet",
        description: "Add your first task to get started.",
      },
      active: {
        title: "No active tasks",
        description: "All your tasks are completed.",
      },
      completed: {
        title: "No completed tasks",
        description: "Complete a task and it will appear here.",
      },
    };

    const message = emptyMessages[filter];

    return (
      <div className="empty-state">
        <div className="empty-icon">✓</div>

        <h3>{message.title}</h3>

        <p>{message.description}</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
}

export default TaskList;