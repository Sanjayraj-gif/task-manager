import useTasks from "../hooks/useTasks";
import StatsCard from "../components/StatsCard";

export default function Dashboard() {
  const { tasks } = useTasks();
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      <div className="row mt-4">
        <div className="col-md-4"><StatsCard title="Total Tasks" value={total} /></div>
        <div className="col-md-4"><StatsCard title="Completed Tasks" value={completed} /></div>
        <div className="col-md-4"><StatsCard title="Pending Tasks" value={pending} /></div>
      </div>
    </div>
  );
}