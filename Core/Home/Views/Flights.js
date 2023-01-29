import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Pressable,
	Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import NavigationBar from './NavigationBar';

import route from '../../../assets/Icons/lax-dfw-route.png';

export default function Flights({ navigation }) {
	const [startTimezone, setStartTimeZone] = React.useState(new Date());
	const [destinationTimezone, setDestinationTimeZone] = React.useState(
		new Date()
	);
	const dictionary = ['DFW', 'LAX', 'LHR', 'IST', 'SAW', 'DAL', 'FRA', 'NRT' ];

	const handleOnClick = () => {};

	return (
		<View style={styles.container}>
			<Image
				source={route}
				style={styles.map}
			></Image>
			<View style={styles.subcontainer}>
				<View style={styles.section}>
					<DateTimePicker
						onChange={(event) => {
							setStartTimeZone(event.value);
						}}
						value={new Date()}
						mode='time'
					></DateTimePicker>
					<SelectDropdown
						buttonStyle={styles.dropdown1BtnStyle}
						buttonTextStyle={styles.dropdown1BtnTxtStyle}
						defaultButtonText={'Select airport'}
						data={dictionary}
						onSelect={(selectedItem, index) => {
							console.log(selectedItem, index);
						}}
						buttonTextAfterSelection={(selectedItem) => {
							return selectedItem;
						}}
						rowTextForSelection={(item) => {
							return item;
						}}
					></SelectDropdown>
				</View>
				<View style={styles.section}>
					<DateTimePicker
						onChange={(event) => {
							setDestinationTimeZone(event.value);
						}}
						value={new Date()}
						mode='time'
					></DateTimePicker>
					<SelectDropdown
						buttonStyle={styles.dropdown1BtnStyle}
						buttonTextStyle={styles.dropdown1BtnTxtStyle}
						rowStyle={styles.dropdown1RowStyle}
						rowTextStyle={styles.dropdown1RowTxtStyle}
						defaultButtonText={'Select airport'}
						data={dictionary}
						onSelect={(selectedItem, index) => {
							console.log(selectedItem, index);
						}}
						buttonTextAfterSelection={(selectedItem) => {
							return selectedItem;
						}}
						rowTextForSelection={(item) => {
							return item;
						}}
					></SelectDropdown>
				</View>
			</View>
			<Pressable
				onPress={handleOnClick}
				style={styles.flightButton}
			>
				<Text style={styles.flightButtonText}>Add Flight</Text>
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
	map: {
		marginTop: '20%',
		width: '80%',
		height: '25%',
		borderRadius: 20,
	},
	subcontainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '30%',
	},
	section: {
		width: '50%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		height: '35%',
		margin: 0,
		padding: 0,
	},
	dropdown1BtnStyle: {
		height: '45%',
		width: '75%',
		backgroundColor: '#FFF',
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#444',
	},
	dropdown1BtnTxtStyle: { color: '#444', textAlign: 'center' },
	dropdown1RowStyle: {
		backgroundColor: '#EFEFEF',
		borderBottomColor: '#C5C5C5',
	},
	dropdown1RowTxtStyle: { color: '#444', textAlign: 'center' },
	flightButton: {
		position: 'relative',
		backgroundColor: 'white',
		borderStyle: 'solid',
		padding: '5%',
		borderRadius: 90,
		width: '90%',
		height: '9%',
		marginTop: '3%',
	},
	flightButtonText: { textAlign: 'center', paddingTop: '1%', fontSize: 20 },
});
