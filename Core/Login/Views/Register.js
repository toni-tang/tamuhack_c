import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function Register({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>Register</Text>
			<View>
				<TextInput></TextInput>
			</View>
			<View>
				<TextInput></TextInput>
			</View>
			<View>
				<TextInput></TextInput>
			</View>
			<View>
				<TextInput></TextInput>
			</View>
            <Pressable>
                <Text>meow</Text>
            </Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
