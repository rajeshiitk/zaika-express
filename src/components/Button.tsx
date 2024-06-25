import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { forwardRef } from "react";
import { COLORS, SIZES } from "@/constants/theme";

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {
    return (
      <Pressable
        ref={ref}
        {...pressableProps}
        style={({ pressed }) => [
          styles.button,
          { opacity: pressed ? 0.8 : 1.0 },
        ]}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: SIZES.h4,
  },
});

export default Button;
