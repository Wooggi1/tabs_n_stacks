import { View, Text, Button } from "react-native";
import { useRouter, Link } from "expo-router";

export default function RecentScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Home Screen</Text>
      <Button
        title="Dislikes recentes"
        onPress={() => router.push("/(tabs)/recent/recentDislike")}
      />
      <Button
        title="Likes recentes"
        onPress={() => router.push("/(tabs)/recent/recentLike")}
      />
    </View>
  );
}
