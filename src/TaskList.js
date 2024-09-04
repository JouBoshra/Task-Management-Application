import React, { useState } from "react";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: false },
    { id: 3, name: "Task 3", completed: false },
  ]);

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
};

export default TaskList;
