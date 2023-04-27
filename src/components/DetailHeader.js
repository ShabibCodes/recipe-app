import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowUturnLeftIcon } from "react-native-heroicons/solid";
import SolidHeart from "react-native-heroicons/solid/HeartIcon";
import { HeartIcon } from "react-native-heroicons/outline";

export default function DetailHeader({ id, handleID }) {
	const navigation = useNavigation();
	const [fav, setFav] = useState(false);

	const favIcon = fav ? (
		<SolidHeart color={"red"} />
	) : (
		<HeartIcon color={"white"} />
	);

	const handleLike = () => {
		setFav(!fav);
		handleID(id);
	};
	return (
		<View className="flex flex-row  z-40 items-center px-4 pb-2 justify-between bg-[#38A3A5] w-screen h-7">
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<ArrowUturnLeftIcon color={"#ffffff"} scale={1} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => handleLike()}>
				{favIcon}
			</TouchableOpacity>
		</View>
	);
}
