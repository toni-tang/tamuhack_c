import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Core/Login/Views/Login';
import Home from './Core/Home/Views/Home';
import Register from './Core/Login/Views/Register';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

//make title screen name clear
function MyStack() {
  return (
		<Stack.Navigator>
			<Stack.Screen
				name='Login'
				component={Login}
			/>
			<Stack.Screen
				name='Home'
				component={Home}
			/>
			<Stack.Screen
				name='Register'
				component={Register}
			/>
		</Stack.Navigator>
  );
}

