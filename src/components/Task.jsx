import { useState } from "react";
function Task({
  id,
  title,
  completed,
  editing,
  onToggle,
  onDelete,
  onEdit,
  onSaveEdit,
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
          {/* <span class="created">created 5 minutes ago</span> */}
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

export default Task;
