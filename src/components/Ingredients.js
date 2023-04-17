import { View, Text } from "react-native";
import React from "react";

export default function Ingredients({ ingredients, measurements }) {
	return (
		<View className="my-4 p-3 bg-white shadow-lg rounded-3xl border-[1.5px] border-[#38A3A5]">
			<Text className="text-lg font-bold">{ingredients.ingredient.name}</Text>
			<Text className="text-sm italic ml-3"> {ingredients.raw_text}</Text>
		</View>
	);
}
