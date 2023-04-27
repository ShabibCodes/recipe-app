import React, { useState, useEffect } from "react";
import {
	ImageBackground,
	View,
	Text,
	KeyboardAvoidingView,
	TouchableOpacity,
	TextInput,
	SafeAreaView,
	Image,
} from "react-native";
import styles from "../constants/styles";
import axios from "axios";
import { ScrollView } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { HeartIcon } from "react-native-heroicons/outline";

import SearchRow from "../components/SearchRow";
import Loader from "../components/Loader";
import { useNavigation } from "@react-navigation/native";

export default function MainScreen() {
	const navigation = useNavigation();
	const image = "../../assets/images/LoginBackground.png";
	const logo = "../../assets/images/logo2.png";
	const [data, setData] = useState([""]);
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
			params: { from: "0", size: "2", q: search },
			headers: {
				"X-RapidAPI-Key": "9985f9fdb4mshf1a3e10c643c6dap10f203jsnd00492ab6685",
				"X-RapidAPI-Host": "tasty.p.rapidapi.com",
			},
		};

		setLoading(true);
		await axios
			.request(options)
			.then((res) => {
				// console.log("HEEEEY Time", res.data.results[0].recipes[0].name);

				const results = res.data.results;
				// console.log("XXX", results);
				// results.forEach((element, index) => {
				// console.log(index, element);
				setData(results);
				// element.recipes.forEach((recipe) => {
				// console.log("zzz", recipe);
				// });
				// });
				// console.log("ZZZZ", data);
			})
			.catch(function (error) {
				setLoading(false);
				console.error(error);
			});
		// Enjoy the loader :D
		setTimeout(async () => {
			setLoading(false);
			console.log("WAIIT");
		}, 3000);

		// data.map((recipe, index) => {
		// 	console.log(index, recipe);
		// });
	};

	return (
		<ImageBackground source={require(image)}>
			<KeyboardAvoidingView
				className="flex flex-col h-full w-full"
				behavior="padding"
			>
				<View className="flex flex-col justify-center items-center mt-12 ">
					<Image className="w-60 h-60" source={require(logo)}></Image>
					{/* <Text className={`${styles.MAINTEXT} text-red`}>Recipe finder </Text> */}
				</View>
				{/* BUTTONS */}
				<View
					className="flex flex-col space-y-5 justify-center items-center mt-[20px] h-[140px]
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
						<Loader loading={loading} />
					) : (
						<SearchRow recipes={data} />
					)}
				</ScrollView>
				<View className="flex flex-col items-center mb-10">
					<TouchableOpacity onPress={() => navigation.navigate("Favourite")}>
						<HeartIcon color={"gray"} size={35} />
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
}
