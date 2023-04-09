import React from "react";
import {
	ImageBackground,
	View,
	Text,
	KeyboardAvoidingView,
} from "react-native";
import styles from "../constants/styles";
export default function MainScreen() {
	const image = "../../assets/images/LoginBackground.png";

	return (
		<ImageBackground source={require(image)}>
			<KeyboardAvoidingView
				className="flex flex-col   h-full w-full"
				behavior="padding"
			>
				<View className="flex flex-row justify-center h-20 items-end">
					<Text className={`${styles.MAINTEXT} text-red`}>
						Search for the recipe you want
					</Text>
				</View>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
}
