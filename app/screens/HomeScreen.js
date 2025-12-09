/* HomeScreen.js - Displays list of tasks
  Student: Darshilkumar Karkar - A00203357
*/
import { useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TaskContext } from '../context/TaskContext';

const HomeScreen = ({ navigation }) => {
  const { tasks, toggleTask, deleteTask } = useContext(TaskContext);

  const renderItem = ({ item }) => (
    <View style={styles.taskCard}>
      <View style={styles.taskInfo}>
        <Text style={[styles.title, item.completed && styles.completedText]}>
          {item.title}
        </Text>
        <Text style={styles.status}>
          {item.completed ? "Completed" : "Pending"}
        </Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => toggleTask(item.id)} style={styles.actionBtn}>
          <Text style={styles.btnText}>✓</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTask(item.id)} style={[styles.actionBtn, styles.deleteBtn]}>
          <Text style={styles.btnText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      
      {/* Floating Action Button */}
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => navigation.navigate('AddTask')}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f5f5f5' },
  taskCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3, // Shadow for Android
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  taskInfo: { flex: 1 },
  title: { fontSize: 18, fontWeight: 'bold' },
  completedText: { textDecorationLine: 'line-through', color: 'gray' },
  status: { fontSize: 12, color: '#666', marginTop: 4 },
  actions: { flexDirection: 'row' },
  actionBtn: { padding: 10, marginLeft: 5, backgroundColor: '#4CAF50', borderRadius: 5 },
  deleteBtn: { backgroundColor: '#F44336' },
  btnText: { color: 'white', fontWeight: 'bold' },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#2196F3',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  fabText: { fontSize: 30, color: 'white' }
});

export default HomeScreen;