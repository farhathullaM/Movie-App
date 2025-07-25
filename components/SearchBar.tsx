import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ onPress, placeholder }: Props) => {
  return (
    <View className="flex-row gap-1 items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={"#ab8bff"}
      />

      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        placeholderTextColor={"#a8b5db"}
        className="flex-1 text-base font-semibold text-white"
      />
    </View>
  );
};

export default SearchBar;
