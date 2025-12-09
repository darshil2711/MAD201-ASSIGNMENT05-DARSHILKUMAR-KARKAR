/* AddTaskScreen.js - Form to add new tasks
  Student: Darshilkumar Karkar - A00203357
*/
import { useContext, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TaskContext } from '../context/TaskContext';

const AddTaskScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSave = () => {
    if (title.trim() === '') {
      Alert.alert("Error", "Please enter a task title");
      return;
    }
    addTask(title, desc);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Task Title</Text>
      <TextInput 
        style={styles.input} 
        placeholder="e.g., Buy Groceries" 
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput 
        style={[styles.input, styles.textArea]} 
        placeholder="Enter details..." 
        value={desc}
        onChangeText={setDesc}
        multiline
      />

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveText}>Save Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 5, color: '#333' },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
  textArea: { height: 100, textAlignVertical: 'top' },
  saveBtn: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveText: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});

export default AddTaskScreen;