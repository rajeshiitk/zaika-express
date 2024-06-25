import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { COLORS, SIZES } from "@/constants/theme";
import { Link } from "expo-router";
import Button from "@/components/Button";

const index = () => {
  return (
    <View style={styles.container}>
      <Link href="/(auth)/sign-up" asChild>
        <Button text="Sign Up" />
      </Link>
      <Link href="/(user)" asChild>
        <Button text="User" />
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
