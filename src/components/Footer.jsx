import PropTypes from "prop-types";
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

Footer.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  activeCount: PropTypes.number.isRequired,
};

Footer.defaultProps = {
  onDelete: () => {},
};

export default Footer;
