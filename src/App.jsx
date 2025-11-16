import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";

export default function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <nav className="navbar navbar-dark bg-dark p-3">
          <div className="container">
            <Link className="navbar-brand" to="/">Task Manager Pro</Link>
            <div>
              <Link className="btn btn-light me-2" to="/">Dashboard</Link>
              <Link className="btn btn-light me-2" to="/tasks">Tasks</Link>
              <Link className="btn btn-light" to="/analytics">Analytics</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}