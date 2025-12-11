/*
 * Course: MAD201-Assignment05
 * Name: Darshilkumar Karkar
 * Student ID: A00203357
 */
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function FloatingButton({ onPress }) {
return (
<TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
<Text style={styles.plus}>+</Text>
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
button: {
position: 'absolute',
right: 20,
bottom: 30,
width: 60,
height: 60,
borderRadius: 30,
backgroundColor: '#007bff',
alignItems: 'center',
justifyContent: 'center',
elevation: 5
},
plus: { color: '#fff', fontSize: 32, lineHeight: 34 }
});