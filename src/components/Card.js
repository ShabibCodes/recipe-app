import { View, Text } from "react-native";
import React from "react";

export default function Card({ recipe }) {
	return (
		<View className="mr-6 my-3 px-1 bg-white shadow-lg rounded">
			<Text className="text-[10px]">{recipe.name}</Text>
		</View>
	);
}
