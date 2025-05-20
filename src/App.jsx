import useTasks from "./hooks/useTasks";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";
import { useState } from "react";

import "./App.css";

function App() {
  const [filter, setFilter] = useState("all");
  const {
    tasks,
    addTask,
    toggleCompleted,
    deleteTask,
    deleteAllCompleted,
    editTask,
    saveEditTask,
  } = useTasks([
    {
      id: 1,
      title: "Completed task",
      completed: true,
      editing: false,
      createdAt: new Date(),
    },
    {
      id: 2,
      title: "Editing task",
      completed: false,
      editing: true,
      createdAt: new Date(),
    },
    {
      id: 3,
      title: "Active task",
      completed: false,
      editing: false,
      createdAt: new Date(),
    },
  ]);
  const filteredTask = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const activeCount = tasks.filter((task) => !task.completed).length;

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onNew={addTask} />
        </header>
        <section className="main">
          <TaskList
            tasks={filteredTask}
            onToggle={toggleCompleted}
            onDelete={deleteTask}
            onEdit={editTask}
            onSaveEdit={saveEditTask}
          />
          <Footer
            filter={filter}
            setFilter={setFilter}
            onDelete={deleteAllCompleted}
            activeCount={activeCount}
          />
        </section>
      </section>
    </>
  );
}

export default App;
