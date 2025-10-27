import { View, Text, Button } from "react-native";
import { useRouter, Link } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Home Screen</Text>
      <Button
        title="Artistas Curtidos"
        onPress={() => router.push("/(tabs)/home/favArtists")}
      />
      <Button
        title="Musicas mais ouvidas"
        onPress={() => router.push("/(tabs)/home/favSongs")}
      />
    </View>
  );
}
