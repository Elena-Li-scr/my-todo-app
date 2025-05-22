import PropTypes from "prop-types";
import TasksFilter from "./TasksFilter";

function Footer({ filter, setFilter, onDelete, activeCount, edit }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        {activeCount} item{activeCount !== 1 ? "s" : ""} left
      </span>
      <TasksFilter filter={filter} setFilter={setFilter} edit={edit} />
      <button
        className="clear-completed"
        onClick={edit === 0 ? onDelete : undefined}
      >
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  activeCount: PropTypes.number.isRequired,
  edit: PropTypes.number.isRequired,
};

Footer.defaultProps = {
  onDelete: () => {},
};

export default Footer;
