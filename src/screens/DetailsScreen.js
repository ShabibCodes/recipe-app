import {
	View,
	Text,
	Image,
	TouchableOpacity,
	Linking,
	SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ArrowUturnLeftIcon, BookmarkIcon } from "react-native-heroicons/solid";
import Unorderedlist from "react-native-unordered-list";

import {
	BookmarkSquareIcon,
	PaperClipIcon,
	IdentificationIcon,
	UserIcon,
} from "react-native-heroicons/outline";
import { ScrollView } from "react-native";
import Steps from "../components/Steps";

export default function DetailsScreen({ route }) {
	const { recipe } = route.params;
	const [fav, setFav] = useState(false);
	const [instructions, setInstructions] = useState(["xxxx"]);

	const navURL = () => {
		Linking.openURL(recipe.original_video_url).catch((err) =>
			console.error("An error occurred", err)
		);
	};

	useEffect(() => {
		recipe.instructions.map((inst, index) => {
			setInstructions([inst.display_text, ...instructions]);
			// console.log(index, ...instructions, inst.display_text);
		});
		// setInstructions(["NEW", ...instructions]);
	}, []);

	console.log("HERE", instructions);

	return (
		<SafeAreaView className="flex flex-col">
			<View className="flex flex-row items-center px-2 justify-between bg-gray-100 w-screen h-10">
				<ArrowUturnLeftIcon />

				<TouchableOpacity>
					<BookmarkIcon
						onPress={() => setFav(!fav)}
						color={fav ? "gold" : "gray"}
					/>
				</TouchableOpacity>
			</View>
			<Image
				source={{ uri: recipe.thumbnail_url }}
				className="w-screen h-80 rounded-sm mx-auto py-1 shadow-xl"
			/>

			<View className="flex flex-col pt-3 px-2 bg-white ">
				<Text className="text-xl font-bold">{recipe.name}</Text>

				{/* Secondary info */}
				<ScrollView
					contentContainerStyle={{
						justifyContent: "space-between",
						alignContent: "space-between",
					}}
				>
					<View
						className="flex flex-row  mt-3 justify-between
				pb-4 overflow-hidden border-gray-300 border-b-[0.3px] z-10 shadow-sm"
					>
						<View className="flex flex-row items-center justify-center space-x-2 bg-slate-200 rounded-full px-5 py-2 shadow-lg z-40">
							<IdentificationIcon color={"#272727"} />
							<Text className="text-sm text-gray-500 ">{recipe.country}</Text>
						</View>
						<View className="flex flex-row items-center justify-center space-x-2 bg-slate-200 rounded-full px-5 py-2 shadow-lg ">
							<UserIcon color={"#272727"} />
							<Text className="text-sm text-gray-500 ">
								{recipe.num_servings} servings
							</Text>
						</View>
						<TouchableOpacity
							className="bg-slate-200 rounded-full px-5 py-2 mr-2 shadow-lg"
							onPress={() => navURL}
						>
							<PaperClipIcon color={"#272727"} size={18} />
						</TouchableOpacity>
					</View>
				</ScrollView>
				{/*  */}
			</View>
			<ScrollView
				bounces={true}
				showsVerticalScrollIndicator={true}
				contentContainerStyle={{
					paddingHorizontal: 10,
					paddingTop: 12,
					paddingBottom: 20,
				}}
			>
				<View className="flex flex-col space-y-5 ml-1 mr-3">
					{recipe.instructions.map((inst, i) => (
						<Steps instruction={inst} key={i} index={i} />
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
