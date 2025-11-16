import useTasks from "../hooks/useTasks";
import TaskCard from "../components/TaskCard";
import AddTaskForm from "../components/AddTaskForm";

export default function Tasks() {
  const { tasks, addTask, deleteTask, toggleTask } = useTasks();
  return (
    <div className="container mt-4">
      <h2>Tasks</h2>
      <AddTaskForm onAdd={addTask} />
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDelete={deleteTask} onToggle={toggleTask} />
      ))}
    </div>
  );
}