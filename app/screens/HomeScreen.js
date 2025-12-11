/*
 * Course: MAD201-Assignment05
 * Name: Darshilkumar Karkar
 * Student ID: A00203357
 */
import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TaskContext } from '../context/TaskContext';

export default function HomeScreen({ navigation }) {
  const { tasks, toggleTask, deleteTask } = useContext(TaskContext);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <TouchableOpacity 
          style={styles.textContainer} 
          onPress={() => toggleTask(item.id)}
        >
          <Text style={[styles.title, item.completed && styles.completedTitle]}>{item.title}</Text>
          <View style={[styles.statusBadge, item.completed ? styles.statusCompleted : styles.statusPending]}>
            <Text style={[styles.statusText, item.completed ? styles.textCompleted : styles.textPending]}>
              {item.completed ? 'Completed' : 'Pending'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('TaskDetails', { id: item.id })} 
          style={styles.actionButton}
        >
          <Text style={styles.detailsText}>Details</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.actionButton}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={() => (
          <View style={styles.empty}><Text style={styles.emptyText}>No tasks yet. Tap + to add one!</Text></View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddTask')}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5F7FA' },
  empty: { alignItems: 'center', marginTop: 60 },
  emptyText: { fontSize: 16, color: '#A0AEC0' },
  card: { 
    backgroundColor: '#fff', 
    borderRadius: 16, 
    padding: 20, 
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardContent: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  textContainer: { flex: 1 },
  title: { fontSize: 18, fontWeight: '700', color: '#2D3748', marginBottom: 8 },
  completedTitle: { textDecorationLine: 'line-through', color: '#A0AEC0' },
  statusBadge: { alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  statusCompleted: { backgroundColor: '#C6F6D5' },
  statusPending: { backgroundColor: '#FEEBC8' },
  statusText: { fontSize: 12, fontWeight: '700' },
  textCompleted: { color: '#22543D' },
  textPending: { color: '#744210' },
  actions: { flexDirection: 'row', justifyContent: 'flex-end', borderTopWidth: 1, borderTopColor: '#EDF2F7', paddingTop: 12 },
  actionButton: { marginLeft: 16, paddingVertical: 4 },
  detailsText: { color: '#4299E1', fontWeight: '600', fontSize: 14 },
  deleteText: { color: '#E53E3E', fontWeight: '600', fontSize: 14 },
  addButton: { 
    position: 'absolute', 
    bottom: 30, 
    right: 30, 
    width: 64, 
    height: 64, 
    borderRadius: 32, 
    backgroundColor: '#3182CE', 
    justifyContent: 'center', 
    alignItems: 'center', 
    shadowColor: '#3182CE',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8 
  },
  addText: { color: '#fff', fontSize: 32, marginTop: -4 }
});