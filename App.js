import { NavigationContainer } from '@react-navigation/native';
import { TaskProvider } from './app/context/TaskContext';
import RootNavigator from './app/navigation/RootNavigator';

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </TaskProvider>
  );
}