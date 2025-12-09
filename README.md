# MAD201 - Cross Platform Mobile Development

## Assignment 5: Task Manager App

**Student Name:** Darshilkumar Karkar  
**Student ID:** A00203357  
**Submission Date:** December 10, 2025  

---

## Overview

In this assignment, students will build a Task Manager App that allows users to create, view, update, and delete tasks.

The app will include multiple screens connected using React Navigation (Stack & Tabs) and manage app-wide data using Context API or Redux for state management.

This project will help students apply key React Native concepts in real-world scenarios — combining navigation, data flow, and state handling across components.

## Objective

Students will demonstrate their ability to:

* Implement multi-screen navigation using Stack and Tab navigators.
* Manage and share state between components using Context API or Redux.
* Use useState and useEffect to handle dynamic data.
* Pass and receive data between screens using navigation props.
* Apply proper project structure and reusable component design.

## App Concept

Create a mobile app that helps users track daily tasks.

**Users can:**

* Add new tasks (title + description).
* View all tasks in a list.
* Mark tasks as completed.
* View task details or delete tasks.

---

## Requirements

### Part A – Home Screen

* Display all tasks using a FlatList.
* Each item shows task title and status (completed / pending).
* A floating button (TouchableOpacity or Pressable) opens the Add Task Screen.
* Example layout:

```javascript
<TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddTask')}>
    <Text style={styles.addText}>+</Text>
</TouchableOpacity>
Part B – Add Task Screen
Form with:

TextInput for task title

TextInput for task description

“Save” button

On submission:

Add the new task to global state using Context or Redux.

Navigate back to home screen.

Part C – Task Detail Screen
Displays selected task title, description, and status.

Options to mark complete, edit, or delete.

Use route parameters to pass data:

JavaScript

const { task } = route.params;
Part D – Completed Tasks Screen (Tab Navigation)
Displays only completed tasks.

Demonstrates Tab Navigation between “All Tasks" and "Completed Tasks”.

Part E – Navigation Structure
Use both Stack and Tab navigation combined:

Stack Navigator: Handles screen flow (Home -> Add Task -> Task Details)

Tab Navigator: Provides two tabs under Home (All Tasks | Completed Tasks)

Example:

JavaScript

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TaskTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All Tasks" component={AllTasksScreen} />
      <Tab.Screen name="Completed" component={CompletedTasksScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tasks" component={TaskTabs} />
        <Stack.Screen name="AddTask" component={AddTaskScreen} />
        <Stack.Screen name="TaskDetails" component={TaskDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
