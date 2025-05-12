import { useState } from "react";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";

import "./App.css";

function App() {
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

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList
            tasks={tasks}
            onToggle={toggleCompleted}
            onDelete={deleteTask}
            onEdit={editTask}
            onSaveEdit={saveEditTask}
          />
          <Footer />
        </section>
      </section>
    </>
  );
}

export default App;
