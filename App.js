import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MainScreen from "./src/screens/MainScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Main"
					component={MainScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Details"
					component={DetailsScreen}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
