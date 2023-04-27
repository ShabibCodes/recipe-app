import { View, Text } from "react-native";
import React from "react";

export default function FavCard() {
	return (
		<View
			className="flex flex-row space-x-3 w-screen items-center
		py-6 px-2 bg-gray-100 border-[0.2px]"
		>
			<Text>IMAGE</Text>
			<Text>FavCard</Text>
		</View>
	);
}
