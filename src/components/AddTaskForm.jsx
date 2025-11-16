import { useState } from "react";
export default function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title) return;

    onAdd({
      id: Date.now(),
      title,
      category,
      completed: false,
    });

    setTitle("");
    setCategory("");
  };
  return (
    <form className="mb-3" onSubmit={submit}>
      <input type="text" className="form-control mb-2" placeholder="Task name"
        value={title} onChange={(e) => setTitle(e.target.value)} />
      <select className="form-control mb-2" value={category}
        onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select category</option>
        <option value="Work">Work</option>
        <option value="Study">Study</option>
        <option value="Personal">Personal</option>
      </select>
      <button className="btn btn-primary w-100">Add Task</button>
    </form>
  );
}