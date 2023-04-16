import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { BugAntIcon } from "react-native-heroicons/outline";
import { CheckIcon } from "react-native-heroicons/solid";

export default function Steps({ instruction, index }) {
	const [done, setDone] = useState(false);

	return (
		<View className="bg-[#ffffff] bg-opacity-[10%] rounded-xl  shadow-xl  mt-10 ">
			<View
				className="flex flex-row justify-between items-center mb-2 pl-2 py-2 pr-4
             bg-[#06d6af] rounded-b-[20px] shadow-lg"
			>
				<Text className="text-lg font-[800] text-white ">
					Step {index + 1}:
				</Text>
				<TouchableOpacity onPress={() => setDone(!done)}>
					{done ? (
						<CheckIcon color={done ? "green" : "#272727"} />
					) : (
						<BugAntIcon color={"#ffffff"} />
					)}
				</TouchableOpacity>
			</View>

			<Text className="text-sm ml-5 mb-4  ">{instruction.display_text}</Text>
		</View>
	);
}
