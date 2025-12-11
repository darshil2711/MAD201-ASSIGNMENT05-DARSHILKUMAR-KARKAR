import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTaskScreen from '../screens/AddTaskScreen';
import HomeScreen from '../screens/HomeScreen';
import TaskDetailsScreen from '../screens/TaskDetailsScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStack() {
return (
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="TaskDetails" component={TaskDetailsScreen} options={{ title: 'Task Details' }} />
<Stack.Screen name="AddTask" component={AddTaskScreen} options={{ title: 'Add Task' }} />
</Stack.Navigator>
);
}


export default function RootNavigator() {
return (
<Tab.Navigator screenOptions={{ headerShown: false }}>
<Tab.Screen name="Tasks" component={HomeStack} options={{ tabBarLabel: 'Tasks' }} />
<Tab.Screen name="Add" component={AddTaskScreen} options={{ tabBarLabel: 'Add' }} />
</Tab.Navigator>
);
}
