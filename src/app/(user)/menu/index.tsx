import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

import Header from "@/components/Header";
import ProductListItem from "@/components/ProductListItem";
import { SafeAreaView } from "react-native-safe-area-context";
import products from "../../../../assets/data/products";

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{
          gap: 10,
          padding: 10,
        }}
        columnWrapperStyle={{
          gap: 10,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
