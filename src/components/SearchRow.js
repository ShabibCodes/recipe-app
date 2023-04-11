import { View, Text, ScrollView } from "react-native";
import React from "react";
import Card from "./Card";
import { ArrowRightIcon } from "react-native-heroicons/outline";

const SearchRow = ({ recipes }) => {
	// console.log("ROWS", recipes);
	output = <Text>Loading ...</Text>;
	if (recipes != null) {
		output = recipes.map((recipe, index) => (
			<Card key={index} recipe={recipe} />
		));
	}

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
				className="flex flex-row space-x-5 "
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					paddingHorizontal: 10,
					paddingTop: 12,
				}}
			>
				{output}
			</ScrollView>
		</View>
	);
};

export default SearchRow;
