import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import { COLORS, SIZES } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";

type InputProps = {
  control: any;
  name: string;
  rules?: any;
  placeholder?: string;
  secureTextEntry?: boolean;
};

const Input = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}: InputProps) => {
  const [hasText, setHasText] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[styles.container, { borderColor: error ? "red" : "white" }]}
          >
            <TextInput
              value={value}
              onChangeText={(text) => {
                onChange(text);
                setHasText(text.length > 0);
              }}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              placeholderTextColor={COLORS.white}
              secureTextEntry={secureTextEntry}
            />
            {hasText && (
              <Ionicons
                style={styles.icon}
                name="checkmark-circle-outline"
                size={24}
                color={error ? "red" : "green"}
              />
            )}
          </View>
          {error && (
            <Text
              style={{
                color: "red",
                alignSelf: "stretch",
                paddingHorizontal: 15,
              }}
            >
              {error.message || "Error"}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "relative",
    gap: 10,
    borderBottomColor: COLORS.lightGrey,
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  input: {
    fontSize: SIZES.h3,
    flex: 1,
    color: COLORS.white,
  },
  icon: {
    marginLeft: 10,
  },
});

export default Input;
