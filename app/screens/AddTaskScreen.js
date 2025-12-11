/*
 * Course: MAD201-Assignment05
 * Name: Darshilkumar Karkar
 * Student ID: A00203357
 */
import React, { useContext, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TaskContext } from '../context/TaskContext';


export default function AddTaskScreen({ navigation }) {
const { addTask } = useContext(TaskContext);
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');


const onSave = () => {
if (!title.trim()) {
Alert.alert('Required', 'Please enter a task title');
return;
}
addTask(title, description);
navigation.goBack();
};


return (
<View style={styles.container}>
  <Text style={styles.headerTitle}>New Task</Text>
  
  <View style={styles.inputGroup}>
    <Text style={styles.label}>Title</Text>
    <TextInput
      style={styles.input}
      value={title}
      onChangeText={setTitle}
      placeholder="What needs to be done?"
      placeholderTextColor="#A0AEC0"
    />
  </View>

  <View style={styles.inputGroup}>
    <Text style={styles.label}>Description</Text>
    <TextInput
      style={[styles.input, styles.multiline]}
      value={description}
      onChangeText={setDescription}
      placeholder="Add details..."
      placeholderTextColor="#A0AEC0"
      multiline
      numberOfLines={4}
      textAlignVertical="top"
    />
  </View>

  <TouchableOpacity style={styles.saveButton} onPress={onSave}>
    <Text style={styles.saveButtonText}>Save</Text>
  </TouchableOpacity>
</View>
);
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#F5F7FA' },
  headerTitle: { fontSize: 28, fontWeight: '800', color: '#2D3748', marginBottom: 32 },
  inputGroup: { marginBottom: 24 },
  label: { fontSize: 14, fontWeight: '600', color: '#4A5568', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#E2E8F0', padding: 16, borderRadius: 12, fontSize: 16, color: '#2D3748' },
  multiline: { height: 120 },
  saveButton: { backgroundColor: '#3182CE', paddingVertical: 16, borderRadius: 12, alignItems: 'center', marginTop: 16, shadowColor: '#3182CE', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 4 },
  saveButtonText: { color: '#fff', fontSize: 18, fontWeight: '700' }
});