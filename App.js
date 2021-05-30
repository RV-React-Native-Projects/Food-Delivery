import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Home, OrderDelivery, Restaurant } from './Screens';
import Tabs from './Navigation/Tabs';

const Stack = createStackNavigator();

// import { Font } from 'expo';

export default function App() {
	// useEffect(() => {
	// 	Font.loadAsync({
	// 		Roboto: require('./assets/fonts/Roboto-Regular.ttf')
	// 	});
	// }, []);

	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Tabs">
					<Stack.Screen name="Tabs" component={Tabs} />
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="OrderDelivery" component={OrderDelivery} />
					<Stack.Screen name="Restaurant" component={Restaurant} />
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
