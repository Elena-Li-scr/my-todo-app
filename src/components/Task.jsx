function Task({ title, completed = false, editing = false }) {
  let className = "";
  if (completed) className = "completed";
  if (editing) className = "editing";

  return (
    <li className={className}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          readOnly
        />
        <label>
          <span className="description">{title}</span>
          {/* <span class="created">created 5 minutes ago</span> */}
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      {editing && <input type="text" className="edit" defaultValue={title} />}
    </li>
  );
}

export default Task;
