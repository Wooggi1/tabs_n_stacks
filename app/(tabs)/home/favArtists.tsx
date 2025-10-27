import { View, Text } from "react-native";
import Card from "@/components/Card/Card";

export default function FavArtistsScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Card
        style={{ marginBottom: 12 }}
        img="https://i.scdn.co/image/ab67616d00001e025c89fd20a185a5bf313063a4"
        title="Shin Guard"
      />
      <Card
        style={{ marginBottom: 12 }}
        img="https://i.scdn.co/image/ab67616d0000b27377f30d6531bfdeb33c1fccbf"
        title="Gojira"
      />
      <Card
        style={{ marginBottom: 12 }}
        img="https://i.scdn.co/image/ab6761610000e5ebae9543465ba77346c966b1c5"
        title="Rory in early 20s"
      />
      <Card
        style={{ marginBottom: 12 }}
        img="https://i.scdn.co/image/ab67616d00001e0207bc7d2a745636c356b4d0aa"
        title="System of a Down"
      />
    </View>
  );
}
