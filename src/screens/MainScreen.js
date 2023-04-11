import React, { useState, useEffect } from "react";
import {
	ImageBackground,
	View,
	Text,
	KeyboardAvoidingView,
	TouchableOpacity,
	TextInput,
	SafeAreaView,
} from "react-native";
import styles from "../constants/styles";
import axios from "axios";
import { ScrollView } from "react-native";
import {
	MagnifyingGlassIcon,
	AdjustmentsHorizontalIcon,
} from "react-native-heroicons/solid";
import AnimatedLoader from "react-native-animated-loader";

import SearchRow from "../components/SearchRow";

export default function MainScreen() {
	const image = "../../assets/images/LoginBackground.png";
	const [data, setData] = useState({ "": "" });
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(false);

	// Initate

	// const once = async () => {
	// 	const options = {
	// 		method: "GET",
	// 		url: "https://tasty.p.rapidapi.com/recipes/list",
	// 		params: { from: "0", size: "5", q: "avocado" },
	// 		headers: {
	// 			"X-RapidAPI-Key": "9985f9fdb4mshf1a3e10c643c6dap10f203jsnd00492ab6685",
	// 			"X-RapidAPI-Host": "tasty.p.rapidapi.com",
	// 		},
	// 	};
	// 	// console.log("SEARCH ", search);
	// 	await axios
	// 		.request(options)
	// 		.then(function (response) {
	// 			console.log("First Time", response.data.results[0].recipes.name);
	// 			const results = response.data.results;
	// 			results.array.forEach((element) => {
	// 				element.recipes.forEach((recipe) => {
	// 					setData(...data, recipe);
	// 				});
	// 			});
	// 		})
	// 		.catch(function (error) {
	// 			console.error(error);
	// 		});
	// 	// data.map((recipe, index) => {
	// 	// 	console.log(index, recipe.name);
	// 	// });
	// };

	const getData = async (search) => {
		const options = {
			method: "GET",
			url: "https://tasty.p.rapidapi.com/recipes/list",
			params: { from: "0", size: "4", q: "avocado" },
			headers: {
				"X-RapidAPI-Key": "9985f9fdb4mshf1a3e10c643c6dap10f203jsnd00492ab6685",
				"X-RapidAPI-Host": "tasty.p.rapidapi.com",
			},
		};

		setLoading(true);
		await axios
			.request(options)
			.then(function (response) {
				console.log("HEEEEY Time", response.data.results[0].recipes[0].name);
				const results = response.data.results;
				// results.array.forEach((element) => {
				// 	element.recipes.forEach((recipe) => {
				// 		setData(...data, recipe);
				// 	});
				// });
			})
			.catch(function (error) {
				setLoading(false);
				console.error(error);
			});
		setLoading(false);

		// data.map((recipe, index) => {
		// 	console.log(index, recipe.name);
		// });
	};

	return (
		<ImageBackground source={require(image)}>
			<KeyboardAvoidingView
				className="flex flex-col   h-full w-full"
				behavior="padding"
			>
				<View className="flex flex-row justify-center h-[100px] items-end">
					<Text className={`${styles.MAINTEXT} text-red`}>Recipe finder </Text>
				</View>
				{/* BUTTONS */}
				<View
					className="flex flex-col space-y-5 justify-center items-center mt-[70px] h-[150px]
           			 w-full "
				>
					<View className="flex-row  bg-gray-200 p-3 space-x-2 w-[350px] mx-5">
						<MagnifyingGlassIcon
							size={20}
							color="gray"
							opacity={0.4}
							className="font-bold"
						/>
						<TextInput
							value={search}
							onChangeText={(text) => setSearch(text)}
							keyboardType="default"
							placeholder="Search for the recipe you want"
							className="text-sm "
						/>
					</View>

					{/*  */}
					<TouchableOpacity
						onPress={() => {
							getData(search);
							setSearch("");
						}}
						className={`${styles.BUTTON} `}
					>
						<Text className={`${styles.BUTTONTEXT}`}>Search</Text>
					</TouchableOpacity>
				</View>
				{/* Vertical Scroll MAIN */}
				<ScrollView
					showsVerticalScrollIndicator={true}
					contentContainerStyle={{
						paddingHorizontal: 10,
						paddingTop: 12,
					}}
				>
					{loading ? (
						<AnimatedLoader
							visible={loading}
							source={require("../../assets/loader.json")}
							overlayColor="rgba(66, 245, 191, 0.75)"
							animationStyle={{
								width: 100,
								height: 100,
								color: "green",
							}}
							speed={1}
						>
							<Text className="text-white text-md font-bold mt-3">
								Cooking something Declicous ...
							</Text>
						</AnimatedLoader>
					) : (
						<SearchRow recipes={data} />
					)}
				</ScrollView>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
}
