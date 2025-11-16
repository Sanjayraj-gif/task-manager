import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
export default function useTasks() {
  return useContext(TaskContext);
}