import { View, Text } from "react-native";
import Card from "@/components/Card/Card";

export default function RecentLikesScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Card
        style={{ marginBottom: 12 }}
        img="https://images.genius.com/93a50c9e56e5ef6cff888f4c24754120.843x843x1.png"
        title="Duvet"
        artist="Bôa"
      />
      <Card
        style={{ marginBottom: 12 }}
        img="https://i.scdn.co/image/ab67616d0000b27350dac62ba465c4d7b971f762"
        title="Oh Darling (part. Soudiere)"
        artist="Freddie Dredd"
      />
      <Card
        style={{ marginBottom: 12 }}
        img="https://i.scdn.co/image/ab67616d0000b27338854ff71cbbad1c197b8fbd"
        title="Back To Strangers"
        artist="Rehash"
      />
      <Card
        style={{ marginBottom: 12 }}
        img="https://cdn-images.dzcdn.net/images/cover/f24f23e77402331c66651877a62c90ec/0x1900-000000-80-0-0.jpg"
        title="Heaven"
        artist="Clairo"
      />
    </View>
  );
}
