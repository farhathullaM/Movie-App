import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex items-center justify-center h-full">
      <Text className="text-3xl bg-red-500 w-full text-center font-bold text-light-200">
        Welcome
      </Text>
      <Link
        href="/onboarding"
        className="text-3xl w-full text-center font-bold text-light-200"
      >
        Onboarding
      </Link>
    </View>
  );
}
