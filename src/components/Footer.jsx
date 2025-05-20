import TasksFilter from "./TasksFilter";

function Footer({ filter, setFilter, onDelete, activeCount }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        {activeCount} item{activeCount !== 1 ? "s" : ""} left
      </span>
      <TasksFilter filter={filter} setFilter={setFilter} />
      <button className="clear-completed" onClick={onDelete}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
