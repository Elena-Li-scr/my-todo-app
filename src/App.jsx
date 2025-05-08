import { useState } from "react";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [tasks] = useState([
    {
      id: 1,
      title: "Completed task",
      completed: true,
      createdAt: new Date(),
    },
    {
      id: 2,
      title: "Editing task",
      editing: true,
      createdAt: new Date(),
    },
    {
      id: 3,
      title: "Active task",
      createdAt: new Date(),
    },
  ]);
  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList tasks={tasks} />
          <Footer />
        </section>
      </section>
    </>
  );
}

export default App;
