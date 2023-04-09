import React, { useState } from "react";
import {
	Text,
	View,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
	ImageBackground,
} from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../constants/styles";

export default function HomeScreen() {
	const navigation = useNavigation();

	const [email, setEmail] = useState("Shabib@gmail.com");
	const [password, setPassword] = useState("");
	const image = "../../assets/images/LoginBackground.png";

	const signIn = () => {
		navigation.replace("Main");
	};

	return (
		<ImageBackground
			source={require(image)}
			style={{ flex: 1, width: null, height: null }}
			className=" w-full h-full"
		>
			<KeyboardAvoidingView
				className="flex flex-col items-center justify-center  h-full w-full"
				behavior="padding"
			>
				<View className="absolute top-20">
					<Text
						className={`${styles.MAINTEXT} shadow-sm text-3xl font-bold text-[#2ECFBF] tracking-normal`}
					>
						Boky
					</Text>
				</View>
				{/* Login form */}
				<View
					className="flex flex-col gap-6 items-center
            justify-center w-full " //Full width
				>
					{/* takes 70% of the container width */}
					<TextInput
						value={email}
						onChangeText={(text) => setEmail(text)}
						placeholder="Email"
						className={`${styles.FORM}`}
					/>
					<TextInput
						value={password}
						onChangeText={(password) => setPassword(password)}
						placeholder="Password"
						secureTextEntry
						className={`${styles.FORM}`}
						// className="border py-2 px-4 min-w-[200px] bg-gray-200"
					/>
				</View>

				{/* BUTTONS */}
				<View
					className="flex flex-col justify-center items-center gap-5 mt-5
            w-full"
				>
					<TouchableOpacity onPress={signIn} className={`${styles.BUTTON} `}>
						<Text className={`${styles.BUTTONTEXT}`}>Login</Text>
					</TouchableOpacity>
					<TouchableOpacity
						className={`${styles.BUTTON} bg-white border-[.8px] `}
					>
						<Text className={`${styles.BUTTONTEXT} text-[#2EC4B6] `}>
							Register
						</Text>
					</TouchableOpacity>
				</View>

				{/* <View>
					<Text>{email}</Text>
					<Text>{test}</Text>
				</View> */}
			</KeyboardAvoidingView>
		</ImageBackground>
	);
}
