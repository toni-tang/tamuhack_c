import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from './NavigationBar';

export default function SleepPlan({ navigation }) {
	const [idealBedtime, setIdealBedtime] = React.useState(1);

	return (
		<View style={styles.container}>
			<Icon
				style={{ color: 'white', paddingTop: '35%' }}
				name='moon'
				size={'70%'}
			></Icon>

			<View style={{ paddingTop: '5%' }}>
				<Text style={styles.text}>Your ideal bedtime is:</Text>
				<Text style={styles.text}>{idealBedtime}:00 AM</Text>
			</View>
			<Text style={styles.subtext}>
				Would you like to set a bedtime reminder now?
			</Text>
			<Pressable style={styles.yesButton}>
				<Text style={styles.yesButtonText}>Yes</Text>
			</Pressable>
			<Pressable style={styles.noButton}>
				<Text style={styles.noButtonText}>No</Text>
			</Pressable>
			<NavigationBar navigation={navigation} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#63a3f7',
		alignItems: 'center',
	},
	text: {
		paddingTop: '1%',
		color: 'white',
		fontSize: '30%',
		maxWidth: '80%',
		alignContent: 'center',
		alignItem: 'center',
		justifyContent: 'center',
		textAlign: 'center',
	},
	subtext: {
		paddingTop: 40,
		color: 'white',
		fontSize: '18%',
		width: '50%',
	},
	yesButton: {
		position: 'relative',
		backgroundColor: 'black',
		borderStyle: 'solid',
		padding: '5%',
		borderRadius: 90,
		width: '90%',
		height: '9%',
		marginTop: '5%',
	},
	yesButtonText: {
		textAlign: 'center',
		color: 'white',
		paddingTop: '1%',
		fontSize: 20,
	},
	noButton: {
		position: 'relative',
		backgroundColor: 'white',
		borderStyle: 'solid',
		padding: '5%',
		borderRadius: 90,
		width: '90%',
		height: '9%',
		marginTop: '3%',
	},
	noButtonText: { textAlign: 'center', paddingTop: '1%', fontSize: 20 },
});
