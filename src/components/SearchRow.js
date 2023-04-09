import { View, Text, ScrollView } from "react-native";
import React from "react";
import Card from "./Card";
import { ArrowRightIcon } from "react-native-heroicons/outline";

const SearchRow = ({ recipes }) => {
	return (
		<View>
			<View className="px-3 py-2 white shadow ">
				<View className="flex-row justify-between px-1 ">
					<Text className="font-bold text-lg">title</Text>

					<ArrowRightIcon className="bg-green-300" />
				</View>
				<Text className="text-sm italic text-gray-500">desc</Text>
			</View>
			<ScrollView
				className="flex-row space-x-5"
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					paddingHorizontal: 10,
					paddingTop: 12,
				}}
			>
				{recipes.map((recipe, index) => (
					<Card recipe={recipe} />
				))}
			</ScrollView>
		</View>
	);
};

export default SearchRow;
