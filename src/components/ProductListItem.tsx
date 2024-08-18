import { Image, Text, Pressable, StyleSheet } from "react-native";
import { Link, useSegments } from "expo-router";
import { Product, Tables } from "@/types";
import { COLORS } from "@/constants/theme";
import { DefaultImage } from "../../assets/data/products";
import RemoteImage from "./RemoteImage";

type ProductListItemProps = {
  product: Tables<"products">;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  const segments = useSegments();

  return (
    <Link href={`/${segments[0]}/menu/${product.id} `} asChild>
      <Pressable style={styles.container}>
        <RemoteImage
          path={product.image}
          fallback={DefaultImage}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    flex: 1,
    maxWidth: "50%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    color: COLORS.primary,
    fontWeight: "bold",
    marginTop: "auto",
  },
});
