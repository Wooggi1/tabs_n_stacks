import { View, Text } from "react-native";
import Card from "@/components/Card/Card";

export default function TrendingArtistsScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Card
        style={{ marginBottom: 12 }}
        img="https://i.scdn.co/image/ab6761610000e5eb30f0dc81183daaee971c2601"
        title="Henrique e Juliano"
      />
      <Card
        style={{ marginBottom: 12 }}
        img="https://i.scdn.co/image/ab6761610000e5ebcda53fa43b003c1eb9d4b7cd"
        title="Grupo Menos É Mais"
      />
      <Card
        style={{ marginBottom: 12 }}
        img="https://i.scdn.co/image/ab6761610000e5eb5751de055799e71658c49655"
        title="MC Ryan SP"
      />
      <Card
        style={{ marginBottom: 12 }}
        img="https://i.scdn.co/image/ab6761610000e5eb2dd5f2f96e301dd661349efb"
        title="Natanzinho Lima"
      />
    </View>
  );
}
