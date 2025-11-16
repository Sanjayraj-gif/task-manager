import { PieChart, Pie, Tooltip } from "recharts";
import useTasks from "../hooks/useTasks";

export default function Analytics() {
  const { tasks } = useTasks();
  const data = [
    { name: "Completed", value: tasks.filter((t) => t.completed).length },
    { name: "Pending", value: tasks.filter((t) => !t.completed).length },
  ];
  return (
    <div className="container mt-4">
      <h2>Analytics</h2>
      <PieChart width={300} height={300}>
        <Pie dataKey="value" data={data} fill="#8884d8" label />
        <Tooltip />
      </PieChart>
    </div>
  );
}