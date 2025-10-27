import { Stack } from "expo-router";

export default function HomeStackLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="favSongs" options={{ title: "Favorite Songs" }} />
      <Stack.Screen name="favArtists" options={{ title: "Favorite Artists" }} />
    </Stack>
  );
}
