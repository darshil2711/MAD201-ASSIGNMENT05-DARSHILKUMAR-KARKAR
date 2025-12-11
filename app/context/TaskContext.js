/*
 * Course: MAD201-Assignment05
 * Name: Darshilkumar Karkar
 * Student ID: A00203357
 */
import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';


export const TaskContext = createContext();


export const TaskProvider = ({ children }) => {
const [tasks, setTasks] = useState([
// sample task
{ id: '1', title: 'Welcome!', description: 'Tap + to add tasks', completed: false }
]);


const addTask = (title, description) => {
if (!title || title.trim() === '') {
Alert.alert('Validation', 'Title cannot be empty');
return;
}
const id = Date.now().toString();
setTasks(prev => [{ id, title, description, completed: false }, ...prev]);
};


const toggleTask = id => {
setTasks(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
};


const deleteTask = id => {
setTasks(prev => prev.filter(t => t.id !== id));
};


const getTask = id => tasks.find(t => t.id === id);


return (
<TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask, getTask }}>
{children}
</TaskContext.Provider>
);
};