import {
	View,
	Text,
	Image,
	TouchableOpacity,
	Linking,
	SafeAreaView,
	ImageBackground,
	useWindowDimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
	ArrowUturnLeftIcon,
	BookmarkIcon,
	ClipboardDocumentListIcon,
	FireIcon,
	ReceiptRefundIcon,
	StarIcon,
} from "react-native-heroicons/solid";
import Unorderedlist from "react-native-unordered-list";

import {
	BookmarkSquareIcon,
	PaperClipIcon,
	IdentificationIcon,
	UserIcon,
	HeartIcon,
} from "react-native-heroicons/outline";

import SolidHeart from "react-native-heroicons/solid/HeartIcon";
import { ScrollView } from "react-native";
import Steps from "../components/Steps";
import { useNavigation } from "@react-navigation/native";
import Ingredients from "../components/Ingredients";
import DetailHeader from "../components/DetailHeader";

export default function DetailsScreen({ route }) {
	const image = "../../assets/images/polygon-scatter-haikei.png";
	const { height, width } = useWindowDimensions();
	const { recipe } = route.params;

	const navigation = useNavigation();
	const [isOn, setIsOn] = useState("steps");
	const [favList, setFavList] = useState([]);

	// OPEN external URLs
	const navURL = () => {
		Linking.openURL(recipe.original_video_url).catch((err) =>
			console.error("An error occurred", err)
		);
	};

	const likeRecipe = () => {
		setFav(!fav);
		// console.log("HERE ", recipe.id);

		// read

		// localStorage.setItem("userData", JSON.stringify([1000]));

		// const favList = localStorage.getItem("userData");
		// console.log("XXX", favList);

		favList.includes(recipe.id)
			? setFavList(favList.filter((id) => id !== recipe.id))
			: setFavList([...favList, recipe.id]);

		// localStorage.setItem("userData", JSON.stringify(favList));
		// favList = localStorage.getItem("userData");
		console.log("HEREs ", favList);
	};

	const handleID = (id) => {
		// favList.includes(id)
		// 	? setFavList(favList.filter((id) => id !== id))
		// 	: setFavList([...favList, id]);
		setFavList([...favList, id]);
		console.log("XXXX  ", favList);
	};

	// ===== TBD =====
	// useEffect(() => {}, []);
	// console.log(
	// 	"HERE",
	// ingredient
	// recipe.sections[0].components.map((ing, index) => ing.ingredient.name),
	// "seperate"
	// mEASUREMENTS
	// recipe.sections[0].components.map((ing, index) => ing.raw_text)
	// );

	// ===== TO DO =====
	// make it bounce properly
	// sticky name happen properly too
	return (
		<View className="flex-1 ">
			<SafeAreaView className="bg-[#38A3A5] " />

			<ScrollView
				bounces={false}
				showsVerticalScrollIndicator={false}
				stickyHeaderIndices={[0, 2]}
			>
				<DetailHeader handleID={handleID} id={recipe.id} />
				<Image
					source={{ uri: recipe.thumbnail_url }}
					className="w-screen h-96 rounded-sm mx-auto py-2   "
				/>

				<View
					className={` flex -top-7 flex-col pt-4 px-2 bg-white  shadow-md rounded-t-[25px]`}
				>
					<View className="flex flex-row justify-between pr-4 pb-2 items-center space-x-10 text-center">
						<Text className="text-xl font-bold">{recipe.name}</Text>
						<View className="flex flex-row items-center justify-center space-x-1 ">
							<StarIcon color={"gold"} />
							<Text className="text-slate-500">
								{(Math.round(recipe.user_ratings.score * 100, 2) / 100) * 5}
							</Text>
						</View>
					</View>

					{/* Secondary info */}
					<View>
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
								onPress={() => navURL()}
							>
								<PaperClipIcon color={"#272727"} size={18} />
							</TouchableOpacity>
						</View>
						{/* SECOND ROW */}
						<View
							className="flex flex-row  justify-evenly
							pb-4 overflow-hidden border-gray-300 border-b-[0.3px] shadow-sm"
						>
							<TouchableOpacity onPress={() => setIsOn("steps")}>
								<View
									className={`${
										isOn === "steps" ? "bg-[#06d6af]" : "bg-slate-200"
									} flex flex-row items-center justify-center space-x-2  rounded-xl px-5 py-2 shadow-lg z-40`}
								>
									<ClipboardDocumentListIcon
										color={isOn === "steps" ? "white" : "#272727"}
									/>

									<Text
										className={`${
											isOn === "steps"
												? "text-white font-bold"
												: "text-gray-500"
										} text-sm`}
									>
										Steps
									</Text>
								</View>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => setIsOn("ingredients")}>
								<View
									className={`${
										isOn === "ingredients" ? "bg-[#06d6af]" : "bg-slate-200"
									} flex flex-row items-center justify-center space-x-2  rounded-xl px-5 py-2 shadow-lg `}
								>
									<FireIcon
										color={isOn === "ingredients" ? "white" : "#272727"}
									/>
									<Text
										className={`${
											isOn === "ingredients"
												? "text-white font-bold"
												: "text-gray-500"
										} text-sm`}
									>
										Ingredients
									</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
					{/*  */}
				</View>
				<ScrollView
					className="bg-white bottom-8"
					bounces={true}
					showsVerticalScrollIndicator={true}
					contentContainerStyle={{
						paddingHorizontal: 10,
						paddingTop: 2,
					}}
				>
					<View>
						{/* STEPS */}
						<View
							className={`${isOn === "steps" ? "flex" : "hidden"} ml-1 mr-3`}
						>
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
						<View
							className={`${
								isOn === "ingredients" ? "" : "hidden"
							} flex-row flex-wrap`}
						>
							{recipe.sections[0].components.map((ing) => (
								<Ingredients ingredients={ing} />
							))}
						</View>
						{/* Measurements  */}
					</View>
				</ScrollView>
			</ScrollView>
		</View>
	);
}
