import { View, Text, ScrollView, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";
import { TouchableOpacity } from "react-native";
import Filter from "./Filter";
import { FlatGrid } from "react-native-super-grid";

const SearchRow = ({ recipes }) => {
	const [showFilter, setShowFilter] = useState(false);
	// console.log("ROWS", recipes.length);
	let n = -1;

	// Counting number of results
	// useEffect(() => {
	recipes.map((recipe, index) => {
		recipe.recipes
			? recipe &&
			  recipe.recipes.map((element, index) => {
					n += 1;
			  })
			: (n += 1);
	});
	// }, []);

	const handleFilter = () => {
		setShowFilter(!showFilter);
	};

	return (
		<View>
			<View className="px-3 py-2 white shadow ">
				<View className="flex-row justify-between px-1 ">
					<Text className="text-sm italic text-gray-500">
						{n === 0 ? (
							"try different keywords"
						) : (
							<Text>Search result .. ({n})</Text>
						)}
					</Text>
					<View className={`${showFilter ? "flex" : "hidden"}`}>
						<Filter />
					</View>
					<TouchableOpacity
						onPress={() => handleFilter()}
						className="bg-green-100 bg-opacity-[10%] rounded-full "
					>
						<AdjustmentsHorizontalIcon className="bg-green-300" />
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView
				className="flex-1 flex-wrap -mb-4 max-h-[500px]  space-x-5 shadow-md"
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					paddingHorizontal: 10,
					paddingTop: 12,
				}}
			>
				{recipes &&
					recipes.map((recipe, index) =>
						recipe.recipes
							? recipe &&
							  recipe.recipes.map((element, index) => (
									<Card key={index} recipe={element} />
							  ))
							: recipe && <Card recipe={recipe} key={index} />
					)}
			</ScrollView>
		</View>
	);
};

export default SearchRow;
