import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Pressable,
	Image,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import PersonInBed from '../../../assets/Icons/PersonInBed.png';

const users = [
	{
		"_id": "tuan882612",
		"email": "tuan882612@gmail.com",
		"password": "Tt12345678",
		"sleep": ""
	},
	{
		"_id": "cool",
		"email": "cool@gmail.com",
		"password": "cool123",
		"sleep": ""
	},
	{
		"_id": "root",
		"email": "root@gmail.com",
		"password": "admin",
		"sleep": ""
	}
]

export default function Login({ navigation }) {
	const [username, onChangeUsernameText] = React.useState('');
	const [password, onChangePasswordText] = React.useState('');
	const [showPassword, setShowPassword] = React.useState(true);
	
	const grabData = async () => {
		const url = 'http://localhost:1000/api/v1/user/login'
		const query = '?username=tuan882612&password=Tt12345678'
		const data = await axios.get(url+query)
			.then(req => console.log(req))
			// .catch(err => console.log(err))
	}

	const handleLogin = () => {
		users.filter(user => {
			if (user.password === password && user._id === username) {
				navigation.navigate('Home');
			}
		})
		// grabData()
	};

	return (
		<View style={styles.container}>
			<Image
				source={PersonInBed}
				style={{ width: '50%', height: '20%' }}
			/>
			<Text style={styles.title}>JetLax</Text>
			<View style={styles.inputBox}>
				<Icon
					style={{ paddingRight: 10 }}
					name='person'
					size={'30%'}
				></Icon>
				<TextInput
					style={styles.username}
					placeholder='Enter Username'
					onChangeText={onChangeUsernameText}
					value={username}
					fontSize={'20%'}
				></TextInput>
			</View>
			<View style={styles.inputBox}>
				<Icon
					style={{ paddingRight: 10, paddingLeft: 50 }}
					name='lock-closed'
					size={'30%'}
				></Icon>
				<TextInput
					style={styles.password}
					placeholder='Enter Password'
					onChangeText={onChangePasswordText}
					value={password}
					secureTextEntry={showPassword}
					fontSize={'20%'}
				></TextInput>
				<Pressable onPress={() => setShowPassword(!showPassword)}>
					<Icon
						style={{ paddingLeft: 20 }}
						name={!showPassword ? 'eye-off' : 'eye'}
						size={'30%'}
					></Icon>
				</Pressable>
			</View>
			<Pressable
				style={styles.continueButton}
				onPress={handleLogin}
			>
				<Text style={styles.continueButtonText}>Continue</Text>
			</Pressable>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					alignContent: 'center',
					paddingTop: '5%',
				}}
			>
				<Text
					style={{
						fontSize: '30%',
						color: 'white',
						paddingBottom: '3%',
						marginBottom: 10,
					}}
				>
					_________{' '}
				</Text>
				<Text
					style={{
						fontSize: '30%',
						color: 'white',
						paddingTop: 10,
						margin: 0,
					}}
				>
					OR
				</Text>
				<Text
					style={{
						fontSize: '30%',
						color: 'white',
						paddingBottom: '3%',
						marginBottom: 10,
					}}
				>
					{' '}
					_________
				</Text>
			</View>
			<Pressable
				style={styles.registerButton}
				onPress={() => navigation.navigate('Home')}
			>
				<Text style={styles.registerButtonText}>Create an Account</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#63a3f7',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputBox: {
		position: 'relative',
		fontSize: '20%',
		width: '90%',
		backgroundColor: '#fff',
		alignContent: 'center',
		border: 3,
		borderRadius: 90,
		height: '9%',
		padding: '5%',
		margin: '1%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	username: {
		minWidth: '70%',
		maxWidth: '70%',
	},
	password: {
		minWidth: '70%',
		maxWidth: '70%',
	},
	logo: {
		display: 'flex',
		flex: 1,
		resizeMode: 'cover',
		height: 20,
		width: 20,
		alignItems: 'center',
	},
	title: {
		fontSize: '100%',
		color: 'white',
		textAlign: 'center',
		alignContent: 'center',
		marginBottom: '3%',
		marginTop: '1%',
	},

	continueButton: {
		position: 'relative',
		backgroundColor: 'white',
		borderStyle: 'solid',
		padding: '5%',
		borderRadius: 90,
		width: '90%',
		height: '9%',
		marginTop: '1%',
	},
	continueButtonText: { textAlign: 'center', fontSize: '20%' },
	registerButton: {
		position: 'relative',
		backgroundColor: 'white',
		borderStyle: 'solid',
		padding: '5%',
		borderRadius: 90,
		width: '90%',
		height: '9%',
		marginTop: '5%',
	},

	registerButtonText: { textAlign: 'center', fontSize: '20%' },
});
