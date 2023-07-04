const TaskForm = ({ createTask, name, handleInputChange, isEditing, updateTask }) => {
  return (
    <form className="task-form" onSubmit={isEditing ? updateTask : createTask}>
      <input
        type="text"
        placeholder="Add a Task"
        name="name"
        value={name}
        onChange={handleInputChange}
      />

{isEditing ? (<button>Edit</button>) : (
      <button type="submit">Add</button>
      )}

</form>
  );
};

export default TaskForm;
