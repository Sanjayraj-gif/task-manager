export default function TaskCard({ task, onDelete, onToggle }) {
  return (
    <div className="card p-3 mt-2">
      <h5 className={task.completed ? "text-decoration-line-through" : ""}>
        {task.title}
      </h5>
      <p className="text-muted">{task.category}</p>
      <button className="btn btn-success me-2" onClick={() => onToggle(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button className="btn btn-danger" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
}