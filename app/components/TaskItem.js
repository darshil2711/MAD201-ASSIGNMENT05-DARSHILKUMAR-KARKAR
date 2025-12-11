import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function TaskItem({ task, onPress }) {
return (
<TouchableOpacity onPress={onPress} style={styles.item}>
<View style={styles.left}>
<Text style={[styles.title, task.completed && styles.completed]}>{task.title}</Text>
{task.description ? <Text style={styles.desc} numberOfLines={1}>{task.description}</Text> : null}
</View>
<View style={styles.right}>
<Text style={styles.status}>{task.completed ? '✓' : '•'}</Text>
</View>
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
item: { flexDirection: 'row', padding: 12, borderBottomWidth: 1, borderColor: '#eee', alignItems: 'center' },
left: { flex: 1 },
right: { width: 30, alignItems: 'center' },
title: { fontSize: 16, fontWeight: '600' },
desc: { color: '#666', marginTop: 4 },
status: { fontSize: 18 },
completed: { textDecorationLine: 'line-through', color: '#888' }
});