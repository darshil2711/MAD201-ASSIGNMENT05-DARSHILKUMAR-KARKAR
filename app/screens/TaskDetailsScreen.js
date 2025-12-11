import { useContext } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { TaskContext } from '../context/TaskContext';


export default function TaskDetailsScreen({ route, navigation }) {
const { id } = route.params;
const { getTask, toggleTask, deleteTask } = useContext(TaskContext);
const task = getTask(id);


if (!task) {
return (
<View style={styles.container}>
<Text>Task not found.</Text>
</View>
);
}


const onDelete = () => {
Alert.alert('Delete', 'Are you sure?', [
{ text: 'Cancel', style: 'cancel' },
{ text: 'Delete', style: 'destructive', onPress: () => { deleteTask(id); navigation.navigate('Home'); } }
]);
};


return (
<View style={styles.container}>
<Text style={styles.title}>{task.title}</Text>
<Text style={styles.desc}>{task.description}</Text>
<Text style={styles.status}>Status: {task.completed ? 'Completed' : 'Pending'}</Text>


<View style={styles.buttons}>
<Button title={task.completed ? 'Mark Pending' : 'Mark Completed'} onPress={() => toggleTask(id)} />
<View style={{ height: 12 }} />
<Button title="Delete" color="#d9534f" onPress={onDelete} />
</View>
</View>
);
}


const styles = StyleSheet.create({
container: { flex: 1, padding: 16, backgroundColor: '#fff' },
title: { fontSize: 24, fontWeight: '700' },
desc: { marginTop: 12, fontSize: 16 },
status: { marginTop: 12, fontWeight: '600' },
buttons: { marginTop: 24 }
});