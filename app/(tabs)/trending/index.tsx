import { View, Text, Button } from "react-native";
import { useRouter, Link } from "expo-router";

export default function TrendingScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Home Screen</Text>
      <Button
        title="Artistas em alta"
        onPress={() => router.push("/(tabs)/trending/trendingArtists")}
      />
      <Button
        title="Generos em alta"
        onPress={() => router.push("/(tabs)/trending/trendingGenre")}
      />
    </View>
  );
}
