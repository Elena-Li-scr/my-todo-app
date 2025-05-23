import PropTypes from "prop-types";
import { useState } from "react";
function NewTaskForm({ onNew }) {
  const [text, setText] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && text.trim() !== "") {
      onNew(text.trim());
      setText("");
    }
  };
  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
      autoFocus
    ></input>
  );
}

NewTaskForm.propTypes = {
  onNew: PropTypes.func.isRequired,
};

NewTaskForm.defaultProps = {
  onNew: () => {},
};

export default NewTaskForm;
