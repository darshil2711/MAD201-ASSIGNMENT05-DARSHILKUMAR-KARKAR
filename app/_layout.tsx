/*
 * Course: MAD201-Assignment05
 * Name: Darshilkumar Karkar
 * Student ID: A00203357
 */
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
