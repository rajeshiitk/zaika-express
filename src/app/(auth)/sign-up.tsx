import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";

import { Text, View } from "@/components/Themed";
import { COLORS, SIZES } from "@/constants/theme";
import { StatusBar } from "expo-status-bar";
import Button from "@/components/Button";
import { Link } from "expo-router";

export default function TabTwoScreen({ navigation }: { navigation: any }) {
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
        <ScrollView>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Zaika Express</Text>
            <Text style={styles.subtitle}>Sign up to continue</Text>
          </View>
          <View style={styles.dataContainer}>
            <TextInput
              placeholder="Email"
              style={styles.textinput}
              placeholderTextColor={COLORS.white}
            />
            <TextInput
              placeholder="Password"
              style={styles.textinput}
              secureTextEntry
              placeholderTextColor={COLORS.white}
            />
            <TextInput
              placeholder="Confirm Password"
              style={styles.textinput}
              secureTextEntry
              placeholderTextColor={COLORS.white}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button text="SIGN UP" />
          </View>
          <View style={styles.bottomContainer}>
            <Link href="/(auth)/sign-in" style={{ textAlign: "center" }}>
              {" "}
              // here text inside link don't support asChild prop
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
