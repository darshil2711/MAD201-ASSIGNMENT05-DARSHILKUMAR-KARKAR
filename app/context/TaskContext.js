/* TaskContext.js
  Manages global state for tasks (Create, Read, Delete, Toggle)
*/
import { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Complete Assignment 5', description: 'Finish React Native App', completed: false },
    { id: '2', title: 'Study for Exam', description: 'Review Chapter 1-4', completed: true },
  ]);

  // Add a new task
  const addTask = (title, description) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Toggle completion status
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};