import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { COLORS } from "@/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Ionicons
          style={styles.searchIcon}
          name="search-outline"
          size={20}
          color={COLORS.primary}
        />
        <TextInput style={styles.input} placeholder="Search here ..." />
      </View>
      <Link href={"/(modal)/filter"} asChild>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="options-outline" size={20} color={COLORS.primary} />
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);

const Header = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={styles.image}
            source={require("../../assets/images/delivery-bike.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.titleContainer} onPress={() => {}}>
          <Text style={styles.title}>Delivery · 30 min</Text>
          <View style={styles.locationName}>
            <Text style={styles.subtitle}>Kanpur</Text>
            <Ionicons name="chevron-down" size={20} color={COLORS.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    height: 60,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 5,
  },
  image: {
    width: 40,
    height: 40,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    opacity: 0.8,
  },
  locationName: {
    flexDirection: "row",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileButton: {
    padding: 10,
    borderRadius: 50,
  },
  searchContainer: {
    height: 60,
  },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  searchField: {
    flex: 1,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 10,
  },
  searchIcon: {
    paddingLeft: 10,
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
});

export default Header;
