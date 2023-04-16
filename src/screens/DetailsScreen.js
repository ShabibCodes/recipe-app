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
import { useNavigation } from "@react-navigation/native";

export default function DetailsScreen({ route }) {
	const { recipe } = route.params;
	const navigation = useNavigation();

	const [fav, setFav] = useState(false);
	const [isOn, setIsOn] = useState("steps");

	const navURL = () => {
		Linking.openURL(recipe.original_video_url).catch((err) =>
			console.error("An error occurred", err)
		);
	};

	// useEffect(() => {}, []);.components[0]
	console.log(
		"HERE",
		// ingredient
		// recipe.sections[0].components.map((ing, index) => ing.ingredient.name),
		"seperate"
		// mEASUREMENTS
		// recipe.sections[0].components.map((ing, index) => ing.raw_text)
	);

	return (
		<SafeAreaView className="flex-1">
			<View className="flex flex-row shadow-sm z-40 items-center px-4 pb-3 justify-between bg-gray-100 w-screen h-8">
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<ArrowUturnLeftIcon color={"#06d6af"} />
				</TouchableOpacity>
				<TouchableOpacity>
					<BookmarkIcon
						onPress={() => setFav(!fav)}
						color={fav ? "gold" : "gray"}
					/>
				</TouchableOpacity>
			</View>
			<Image
				source={{ uri: recipe.thumbnail_url }}
				className="w-screen h-64 rounded-sm mx-auto py-1  "
			/>

			<View className="flex flex-col pt-3 px-2 bg-white ">
				<Text className="text-xl font-bold">{recipe.name}</Text>
				<Text>{}</Text>

				{/* Secondary info */}
				<ScrollView
					contentContainerStyle={{
						justifyContent: "space-between",
						alignContent: "space-between",
					}}
				>
					<View
						className="flex flex-row  mt-3 justify-between
				pb-4  border-gray-300  z-10 shadow-sm"
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
					{/* SECOND ROW */}
					<View
						className="flex flex-row  mt-3 justify-between
				pb-4 overflow-hidden border-gray-300 border-b-[0.3px] z-10 shadow-sm"
					>
						<TouchableOpacity onPress={() => setIsOn("steps")}>
							<View
								className={`${
									isOn === "steps" ? "bg-slate-200" : "bg-[#06d6af]"
								}bg-slate-200 flex flex-row items-center justify-center space-x-2  rounded-full px-5 py-2 shadow-lg z-40`}
							>
								<IdentificationIcon color={"#272727"} />

								<Text className="text-sm text-gray-500 ">Steps</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => setIsOn("xx")}>
							<View className="flex flex-row items-center justify-center space-x-2 bg-slate-200 rounded-full px-5 py-2 shadow-lg ">
								<UserIcon color={"#272727"} />
								<Text className="text-sm text-gray-500 ">
									{recipe.num_servings} servings
								</Text>
							</View>
						</TouchableOpacity>

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
				}}
			>
				<View className={` flex-col space-y-5 ml-1 mr-3`}>
					{/* STEPS */}
					<View className={`${isOn === "steps" ? "flex" : "hidden"}`}>
						{recipe.instructions.map((inst, i) => (
							<Steps instruction={inst} key={i} index={i} />
						))}
						<View className="mx-auto mt-7 mb-10 p-5 shadow-2xl rounded-full bg-white">
							<Text className="text-4xl text-[#06d6af] font-bold">
								Bon Appetit
							</Text>
						</View>
					</View>
					{/* Ingredients */}
					<View></View>
					{/* Measurements  */}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
