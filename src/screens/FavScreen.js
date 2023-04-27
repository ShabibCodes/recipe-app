import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import React from "react";
import { ArrowUturnLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import FavCard from "../components/FavCard";
import FavRow from "../components/FavRow";

export default function FavScreen() {
	const navigation = useNavigation();

	return (
		<View>
			<SafeAreaView className="bg-[#38a3a5]">
				<View className="flex flex-row  z-40 items-center px-4 pb-2 justify-between bg-[#38A3A5] w-screen h-7">
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<ArrowUturnLeftIcon color={"#ffffff"} scale={1} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Text>FavScreen</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
			<ScrollView className="h-full">
				<FavRow />
			</ScrollView>
		</View>
	);
}
