import PropTypes from "prop-types";
function TasksFilter({ filter, setFilter, edit }) {
  return (
    <ul className="filters">
      <li>
        <button
          className={filter === "all" ? "selected" : ""}
          onClick={edit === 0 ? () => setFilter("all") : undefined}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={filter === "active" ? "selected" : ""}
          onClick={edit === 0 ? () => setFilter("active") : undefined}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={filter === "completed" ? "selected" : ""}
          onClick={edit === 0 ? () => setFilter("completed") : undefined}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

TasksFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  edit: PropTypes.number.isRequired,
};
export default TasksFilter;
