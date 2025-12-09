/* Student Name: Darshilkumar Karkar
  Student ID: A00203357
  Date: Dec 08, 2025
  Description: Main App entry point with Navigation Structure
*/

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { TaskProvider } from './context/TaskContext';

// Placeholder Components
const HomeScreen = () => <View><Text>Home</Text></View>;
const AddTaskScreen = () => <View><Text>Add Task</Text></View>;

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All Tasks" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        {/* ... stack navigator ... */}
      </NavigationContainer>
    </TaskProvider>
  );
}