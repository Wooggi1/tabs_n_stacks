import { Stack } from "expo-router";

export default function RecentStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Recentes" }} />
      <Stack.Screen name="recentDislike" options={{ title: "Ultimos Deslikes" }} />
      <Stack.Screen name="recentLike" options={{ title: "Ultimos Likes" }} />
    </Stack>
  );
}
