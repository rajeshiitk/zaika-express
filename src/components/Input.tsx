import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import { COLORS, SIZES } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import {
  getPasswordStrength,
  getPasswordStrengthColor,
} from "@/utils/passwordStrength";

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
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    if (rules.validate) {
      setIsValid(rules.validate(inputValue) === true);
    }
    if (name === "password") {
      setStrength(getPasswordStrength(inputValue));
    }
  }, [inputValue, rules, name]);

  const validateInput = (value: string) => {
    let valid = true;
    if (rules.required && !value) {
      valid = false;
    }
    if (rules.pattern && !rules.pattern.value.test(value)) {
      valid = false;
    }
    if (rules.minLength && value.length < rules.minLength.value) {
      valid = false;
    }
    if (rules.validate && typeof rules.validate === "function") {
      valid = rules.validate(value) === true;
    }
    return valid;
  };

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
                setInputValue(text);
                setIsValid(validateInput(text));
              }}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              placeholderTextColor={COLORS.white}
              secureTextEntry={secureTextEntry}
            />
            {inputValue.length > 0 && (
              <Ionicons
                name="checkmark-circle-outline"
                size={24}
                color={
                  error
                    ? "red"
                    : isValid && name !== "password"
                    ? "green"
                    : getPasswordStrengthColor(strength)
                }
              />
            )}
          </View>
          {/* {name === "password" && (
            <View
              style={[
                styles.strengthIndicator,
                { backgroundColor: getPasswordStrengthColor(strength) },
              ]}
            >
              <Text style={styles.strengthText}>Strength: {strength}</Text>
            </View>
          )} */}
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

  strengthIndicator: {
    borderRadius: 2,
    marginTop: 5,
    marginHorizontal: 15,
  },
  strengthText: {
    color: COLORS.white,
    fontSize: SIZES.h5,
    textAlign: "center",
    marginTop: 5,
  },
});

export default Input;
