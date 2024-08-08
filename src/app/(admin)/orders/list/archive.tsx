import { Text, FlatList } from "react-native";
import OrderListItem from "@/components/OrderListItem";
import orders from "../../../../../assets/data/orders";

export default function OrdersScreen() {
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
    />
  );
}
