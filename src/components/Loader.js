import { View, Text } from "react-native";
import React from "react";
import AnimatedLoader from "react-native-animated-loader";

export default function Loader({loading}) {
	return (
		<View>
			<AnimatedLoader
				visible={loading}
				source={require("../../assets/newLoader.json")}
				overlayColor="rgba(66, 245, 191, 0.75)"
				animationStyle={{
					width: 400,
					height: 400,
					color: "green",
				}}
				speed={1}
			>
				<Text className="text-white text-md font-bold mt-3">
					Cooking something Declicous ...
				</Text>
			</AnimatedLoader>
		</View>
	);
}
