function TaskStats({ tasks }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const activeTasks = totalTasks - completedTasks;

  return (
    <div className="task-stats">
      <div className="stat-card">
        <span className="stat-label">Total</span>
        <strong>{totalTasks}</strong>
      </div>

      <div className="stat-card">
        <span className="stat-label">Active</span>
        <strong>{activeTasks}</strong>
      </div>

      <div className="stat-card">
        <span className="stat-label">Completed</span>
        <strong>{completedTasks}</strong>
      </div>
    </div>
  );
}

export default TaskStats;