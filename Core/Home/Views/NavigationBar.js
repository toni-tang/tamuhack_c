import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function NavigationBar(props) {
	const { navigation } = props;

	return (
		<View style={styles.navigatorContainer}>
			<View>
				<Pressable
					style={styles.icon}
					onPress={() => navigation.navigate('Home')}
				>
					<Icon
						name='home'
						size={'40%'}
					></Icon>
				</Pressable>
				<Text style={styles.iconText}>Home</Text>
			</View>
			<View>
				<Pressable
					style={styles.icon}
					onPress={() => navigation.navigate('Sleep Plan')}
				>
					<Icon
						name='bed'
						size={'40%'}
					></Icon>
				</Pressable>
				<Text style={styles.iconText}>Sleep Plan</Text>
			</View>
			<View>
				<Pressable
					style={styles.icon}
					onPress={() => navigation.navigate('Flights')}
				>
					<Icon
						name='airplane'
						size={'40%'}
					></Icon>
				</Pressable>
				<Text>Flights</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	navigatorContainer: {
		position: 'absolute',
		bottom: '0%',
		height: '15%',
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	icon: {
		alignItems: 'center',
	},
	iconText: {
		alignItems: 'center',
		textAlign: 'center',
		justifyContent: 'center',
		border: 1,
		borderColor: 'black',
	},
});
