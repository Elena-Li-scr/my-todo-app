import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";
function Task({
  id,
  title,
  completed,
  editing,
  onToggle,
  onDelete,
  onEdit,
  onSaveEdit,
  createdAt,
}) {
  const [editText, setEditText] = useState(title);
  let className = "";
  if (completed) className = "completed";
  if (editing) className = "editing";

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSaveEdit(id, editText);
    }
  };

  return (
    <li className={className}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />
        <label>
          <span className="description">{title}</span>
          <span className="created">
            created{" "}
            {formatDistanceToNow(new Date(createdAt), {
              addSuffix: true,
              includeSeconds: true,
            })}
          </span>
        </label>
        <button className="icon icon-edit" onClick={() => onEdit(id)}></button>
        <button
          className="icon icon-destroy"
          onClick={() => onDelete(id)}
        ></button>
      </div>
      {editing && (
        <input
          type="text"
          className="edit"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      )}
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string,
  completed: PropTypes.bool,
  editing: PropTypes.bool,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
  onToggle: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onSaveEdit: PropTypes.func,
};

Task.defaultProps = {
  title: "",
  completed: false,
  editing: false,
  onToggle: () => {},
  onDelete: () => {},
  onEdit: () => {},
  onSaveEdit: () => {},
};
export default Task;
