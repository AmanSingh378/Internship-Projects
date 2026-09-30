import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import TaskStats from "./components/TaskStats";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(
      "react-task-manager-tasks"
    );

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(
      "react-task-manager-tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = (taskTitle) => {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  const toggleTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  const editTask = (taskId, updatedTitle) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, title: updatedTitle }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true;
  });

  return (
    <div className="app">
      <Header />

      <main className="task-container">
        <TaskForm onAddTask={addTask} />

        <TaskStats tasks={tasks} />

        <FilterBar
          currentFilter={filter}
          onFilterChange={setFilter}
        />

        <TaskList
          tasks={filteredTasks}
          filter={filter}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          onEditTask={editTask}
        />

        <p className="task-count">
          {tasks.length}{" "}
          {tasks.length === 1 ? "task" : "tasks"} total
        </p>
      </main>
    </div>
  );
}

export default App;