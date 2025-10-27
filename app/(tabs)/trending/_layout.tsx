import { Stack } from "expo-router";

export default function TrendingStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Em Alta" }} />
      <Stack.Screen name="trendingGenre" options={{ title: "Generos Em Alta" }} />
      <Stack.Screen name="trendingArtists" options={{ title: "Artistas Em Alta" }} />
    </Stack>
  );
}
