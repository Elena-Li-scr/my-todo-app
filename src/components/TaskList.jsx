import Task from "./Task";
import PropTypes from "prop-types";

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

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool,
      editing: PropTypes.bool,
      createdAt: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date),
      ]).isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onSaveEdit: PropTypes.func,
};

TaskList.defaultProps = {
  onToggle: () => {},
  onDelete: () => {},
  onEdit: () => {},
  onSaveEdit: () => {},
};
export default TaskList;
