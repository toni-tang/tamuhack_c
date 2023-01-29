import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Home({ navigation }) {
	const [bedtime, setBedtime] = React.useState(0);

	return (
		<View style={styles.container}>
			<Text>JetLax</Text>
			<View style={styles.textContainer}>
				<Text>Hours until bedtime</Text>
				<Text>{bedtime} hours</Text>
			</View>
			<View style={styles.textContainer}>
				<Text>Hours until bedtime for traveling</Text>
				<Text>{bedtime} hours</Text>
			</View>
			<Image></Image>
			<View style={styles.navigatorContainer}>
				<View>
					<Pressable onPress={() => navigation.navigate('Login')}>
						<Icon
							name='calendar'
							size={'50%'}
						></Icon>
					</Pressable>
					<Text>Calender</Text>
				</View>
				<View>
					<Pressable onPress={() => navigation.navigate('Login')}>
						<Icon
							name='airplane'
							size={'50%'}
						></Icon>
					</Pressable>
					<Text>Flights</Text>
				</View>
			</View>
			<StatusBar style='auto' />
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
	navigatorContainer: {
		position: 'absolute',
		bottom: '0%',
		height: '15%',
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		backgroundColor: 'grey',
	},
	subtext: {},
	time: {},
	textContainer: {
		alignItems: 'center',
		padding: 20,
	},
});
