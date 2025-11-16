export default function StatsCard({ title, value }) {
  return (
    <div className="card p-3 text-center shadow-sm">
      <h3>{value}</h3>
      <p className="text-muted">{title}</p>
    </div>
  );
}