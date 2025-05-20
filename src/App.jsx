import { useState } from "react";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([
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
  const toggleCompleted = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, editing: true }
          : { ...task, editing: false }
      )
    );
  };

  const saveEditTask = (id, newTitle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title: newTitle, editing: false } : task
      )
    );
  };

  const addTask = (title) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.round(Math.random() * 100000),
        title,
        completed: false,
        editing: false,
        createdAt: new Date(),
      },
    ]);
  };

  const deleteAllCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };
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
