import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
} from 'react-native';
import NavigationBar from './NavigationBar';

export default function Home({ navigation }) {
	const [bedtime, setBedtime] = React.useState(0);
	const [travelBedtime, setTravelBedtime] = React.useState(0);

	return (
		<View style={styles.container}>
			{/* <Text style={styles.title}>JetLax</Text> */}
			<View style={{ paddingTop: '25%' }}>
				<View style={styles.textContainer}>
					<Text style={styles.subtext}>Hours until bedtime</Text>
					<Text style={styles.time}>{bedtime}</Text>
					<Text style={styles.hours}>hours</Text>
				</View>


				<View style={styles.textContainer}>
					<Text style={styles.subtext}>
						Hours until bedtime for traveling
					</Text>
					<Text style={styles.time}>{travelBedtime}</Text>
					<Text style={styles.hours}>hours</Text>
				</View>
			</View>
			<Image></Image>
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
	subtext: { fontSize: '22%', color: 'white', paddingBottom:10, },
	time: { fontSize: '60%', fontWeight: 'bold', color: 'white' },
	textContainer: {
		alignItems: 'center',
		padding: 30,
	},
	hours: { fontSize: '18%', fontWeight: 'bold', color: 'white' },

});
