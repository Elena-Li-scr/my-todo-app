import Task from "./Task";

function TaskList({ tasks, onToggle, onDelete, onEdit, onSaveEdit }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          onSaveEdit={onSaveEdit}
        />
      ))}
    </ul>
  );
}

export default TaskList;
