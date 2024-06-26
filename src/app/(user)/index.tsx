import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import Header from "@/components/Header";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
