import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { TaskProvider } from './context/TaskContext';
import RootNavigator from './navigation/RootNavigator';

export default function RootLayout() {
  return (
    <TaskProvider>
      <NavigationContainer independent={true}>
        <RootNavigator />
      </NavigationContainer>
    </TaskProvider>
  );
}
