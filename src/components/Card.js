import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Card({ recipe }) {
	const navigation = useNavigation();

	const recipeDetails = () => {
		navigation.navigate("Details");
	};

	return (
		<View className=" flex flex-col w-[25%] h-[90%] items-center mr-5 my-3 px-1 bg-gray-100 shadow-md rounded">
			<TouchableOpacity onPress={() => recipeDetails()} className="   ">
				<Image
					source={{ uri: recipe.thumbnail_url }}
					className="w-56 h-52 rounded-lg mb-1 mx-auto mt-2"
				/>

				{/* NAME - RATING */}
				<View className="flex-col items-center justify-between my-1 ">
					<Text className=" text-lg font-bold">{recipe.name}</Text>
					<View className="flex-row items-center space-x-1">
						{/* <StarIcon className="shadow " color="purple" opacity={0.6} /> */}
						<Text className="text-gray-500 font-bold"> {recipe.id}</Text>
					</View>
				</View>
				{/* Location */}
				<View className="flex-row items-center justify-around pb-5">
					<View className="flex-row items-center">
						{/* <MapPinIcon color="gray" opacity={0.7} /> */}
						<Text className="text-s text-gray-400"> </Text>
					</View>
					<Text className="text-s text-gray-400 font-bold"> </Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}
