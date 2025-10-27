import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#007aff",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerTitle: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="trending"
        options={{
          title: "Trending",
          headerTitle: "Em Alta",
          tabBarIcon: ({ color, size }) => (
            <Feather name="music" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="recent"
        options={{
          title: "Recent",
          headerTitle: "Recente",
          tabBarIcon: ({ color, size }) => (
            <Feather name="clock" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
