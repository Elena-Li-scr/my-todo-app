import { useState } from "react";

function useTasks(initialsTasks = []) {
  const [tasks, setTasks] = useState(initialsTasks);

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

  return {
    tasks,
    addTask,
    toggleCompleted,
    deleteTask,
    deleteAllCompleted,
    editTask,
    saveEditTask,
  };
}

export default useTasks;
