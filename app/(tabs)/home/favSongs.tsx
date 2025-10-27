import { View, Text } from "react-native";
import Card from "@/components/Card/Card";

export default function FavSongsScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Card
        style={{ marginBottom: 12 }}
        img="https://i.scdn.co/image/ab67616d0000b273d655085b0b1d80e9e11c8488"
        title="bite my tongue"
        artist="wilt"
      />
      <Card
        style={{ marginBottom: 12 }}
        img="https://i.scdn.co/image/ab67616d0000b273c8b32380575d518f0639a123"
        title="if not winter"
        artist="wisp"
      />
      <Card
        style={{ marginBottom: 12 }}
        img="https://i.scdn.co/image/ab67616d0000b273780766f32cfa6359c93ae2dc"
        title="life imitates life"
        artist="quannic"
      />
      <Card
        style={{ marginBottom: 12 }}
        img="https://i.scdn.co/image/ab67616d0000b2733d4cbde1ddbe5eaf3e781de0"
        title="Mr. Kill Myself"
        artist="sewerslvt"
      />
    </View>
  );
}
