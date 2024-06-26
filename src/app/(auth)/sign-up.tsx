import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";

import { Text, View } from "@/components/Themed";
import { COLORS, SIZES } from "@/constants/theme";
import { StatusBar } from "expo-status-bar";
import Button from "@/components/Button";
import { Link } from "expo-router";
import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import React from "react";
import { EMAIL_REGEX } from "@/constants";

export default function SignUpScreen() {
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");

  const signUpWithEmail = (data: any) => {
    console.log(data);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../../../assets/images/background.png")}
        style={{
          flex: 1,
          position: "absolute",
          left: 0,
          top: 0,
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        resizeMode="cover"
      >
        <ScrollView
          style={{ maxWidth: 600, width: "100%", marginHorizontal: "auto" }}
        >
          <View style={styles.topContainer}>
            <Text style={styles.title}>Zaika Express</Text>
            <Text style={styles.subtitle}>Sign Up to continue ! </Text>
          </View>
          <View style={styles.dataContainer}>
            <Input
              name="email"
              control={control}
              placeholder="Email"
              rules={{
                required: "Email is required",
                pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
              }}
            />
            <Input
              name="password"
              control={control}
              placeholder="Password"
              secureTextEntry
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password should be at least 8 characters long",
                },
              }}
            />
            <Input
              name="confirmPassword"
              control={control}
              placeholder="Confirm Password"
              secureTextEntry
              rules={{
                validate: (value: string) =>
                  value === pwd || "Password do not match",
              }}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button text="SIGN UP" onPress={handleSubmit(signUpWithEmail)} />
          </View>
          <View style={styles.bottomContainer}>
            <Link href="/(auth)/sign-in" style={{ textAlign: "center" }}>
              <Text style={styles.text}>
                Already have an account? | Sign In
              </Text>
            </Link>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  topContainer: {
    marginTop: 100,
    alignItems: "center",
  },
  title: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: SIZES.h1 * 1.5,
  },
  subtitle: {
    color: COLORS.white,
    fontSize: SIZES.h4,
    paddingTop: 3,
  },
  dataContainer: {
    marginTop: 60,
  },
  textinput: {
    color: COLORS.white,
    fontSize: SIZES.h3,
    borderBottomColor: COLORS.lightGrey,
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  btnContainer: {
    marginTop: 50,
  },
  text: {
    color: COLORS.white,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "600",
    fontSize: SIZES.h5,
  },
  bottomContainer: {
    justifyContent: "center",
    marginTop: 50,
  },
});
