import { View, Text } from "react-native";
import React from "react";
import FavCard from "./FavCard";

export default function FavRow() {
	return (
		<View className=" flex flex-col space-y-2 ">
			<FavCard />
			<FavCard />
			<FavCard />
			<FavCard />
		</View>
	);
}
