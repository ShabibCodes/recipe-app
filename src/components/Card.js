import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StarIcon } from "react-native-heroicons/solid";

export default function Card({ recipe }) {
	const navigation = useNavigation();
	const [rating, setRating] = useState(0.0);

	useEffect(() => {
		setRating((Math.round(recipe.user_ratings.score * 100, 2) / 100) * 5);
	}, []);

	const recipeDetails = () => {
		navigation.navigate("Details", {
			recipe: recipe,
		});
	};

	return (
		<View className="card flex flex-col w-64 h-68 items-center mr-5 bg-gray-100 shadow-md rounded-md">
			<TouchableOpacity onPress={() => recipeDetails()}>
				<Image
					source={{ uri: recipe.thumbnail_url }}
					className="w-60 h-52 rounded-lg mx-auto mb-1  mt-1"
				/>
				<Image />
				<View className="flex flex-row items-center text-center space-x-2 ">
					<StarIcon color={rating > 2.5 ? "#ffd60a" : "red"} />
					<Text>{rating}</Text>
				</View>

				{/* NAME - RATING */}
				<View className="flex-col items-center justify-between my-1 mx-2 ">
					<Text className=" text-md font-bold tracking-widest">
						{recipe.name}
					</Text>
				</View>
				{/* Location */}
				{/* <View className="flex-row items-center justify-around pb-5">
					<View className="flex-row items-center">

						<Text className="text-s text-gray-400"> </Text>
					</View>
					<Text className="text-s text-gray-400 font-bold"> </Text>
				</View> */}
			</TouchableOpacity>
		</View>
	);
}
