import { View, Text } from "react-native";
import React from "react";

export default function Ingredients({ ingredients, measurements }) {
	return (
		<View className="flex flex-row  items-center w-[40%] my-4 ml-4  py-6 bg-white shadow-lg rounded-3xl border-[2.3px] border-[#38A3A5]">
			<View className="w-[30%] p-3 items-center bg-[#e6ebf2] rounded-xl mr-4 ml-2">
				<Text className="text-md font-bold italic ">
					{ingredients.raw_text.charAt(0)}
				</Text>
			</View>
			<View className="flex-1">
				<Text className="text-[16px] font-bold ">
					{ingredients.ingredient.name}
				</Text>
				{/* <Text>{ingredients.raw_text}</Text> */}
			</View>
		</View>
	);
}
