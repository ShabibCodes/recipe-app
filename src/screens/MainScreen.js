import React, { useState } from "react";
import {
	ImageBackground,
	View,
	Text,
	KeyboardAvoidingView,
	TouchableOpacity,
	TextInput,
} from "react-native";
import styles from "../constants/styles";
import axios from "axios";
import { ScrollView } from "react-native";
import {
	MagnifyingGlassIcon,
	AdjustmentsHorizontalIcon,
} from "react-native-heroicons/solid";
import SearchRow from "../components/SearchRow";

export default function MainScreen() {
	const image = "../../assets/images/LoginBackground.png";
	const [data, setData] = useState({});
	const [search, setSearch] = useState("");

	const getData = (search) => {
		const options = {
			method: "GET",
			url: "https://tasty.p.rapidapi.com/recipes/list",
			params: { from: "0", size: "20", q: search },
			headers: {
				"X-RapidAPI-Key": "5563fa0f6fmsh8723e3397c603a6p10ca39jsn2550b43a59ad",
				"X-RapidAPI-Host": "tasty.p.rapidapi.com",
			},
		};
		// console.log("SEARCH ", search);
		axios
			.request(options)
			.then(function (response) {
				console.log("HERE", response.data.results[1].name);
				setData(response.data.results);
			})
			.catch(function (error) {
				console.error(error);
			});
		data.map((recipe, index) => {
			console.log(index, recipe.name);
		});
	};

	return (
		<ImageBackground source={require(image)}>
			<KeyboardAvoidingView
				className="flex flex-col   h-full w-full"
				behavior="padding"
			>
				<View className="flex flex-row justify-center h-[200px] items-end">
					<Text className={`${styles.MAINTEXT} text-red`}>
						Search for the recipe you want
					</Text>
				</View>
				{/* BUTTONS */}
				<View
					className="flex flex-col space-y-5 justify-center items-center mt-[150px] h-[150px]
           			 w-full border"
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
							placeholder="Find new recipes !"
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
					className=" flex-row space-x-5 "
					showsVerticalScrollIndicator={true}
					contentContainerStyle={{
						paddingHorizontal: 10,
						paddingTop: 12,
					}}
				>
					<SearchRow recipes={data} />
				</ScrollView>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
}
