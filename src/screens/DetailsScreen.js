import { View, Text } from "react-native";
import React from "react";

export default function DetailsScreen({ route }) {
	const { recipe } = route.params;
	return (
		<View>
			<Text>{recipe.name}</Text>
		</View>
	);
}
