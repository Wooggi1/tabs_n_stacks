import { View, Text } from "react-native";
import Card from "@/components/Card/Card";

export default function RecentDislikesScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Card
        style={{ marginBottom: 12 }}
        img="https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/87/00/c0/8700c022-d633-15c4-185c-527484e400e0/mzm.yhaogger.jpg/600x600bf-60.jpg"
        title="Dunkelheit"
        artist="Burzum"
      />
      <Card
        style={{ marginBottom: 12 }}
        img="https://i.scdn.co/image/ab67616d0000b27379e93abbffaa1d816b33fbb0"
        title="Bandido Problemático"
        artist="DJ Gustomares"
      />
    </View>
  );
}
