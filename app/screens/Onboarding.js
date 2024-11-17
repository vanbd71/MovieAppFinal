import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";

const { width, height } = Dimensions.get("window");

const statusBarHeight = StatusBar.currentHeight;

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>
          NET<Text style={{ color: "#FFD700" }}>FLEX</Text>
        </Text>
        <Text style={styles.headerLanguage}>English</Text>
      </View>
      <View style={styles.body}>
        <Image
          style={styles.bodyImage}
          source={require("../../assets/banner.png")}
          resizeMode="cover"
        />
        <Text style={styles.bodyText}>NETFLEX hello!</Text>
        <Text style={styles.bodyTextSmall}>Enjoy your favorite movies</Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.btnSignIn}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.btnTextSignIn}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnSignUp}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.btnTextSignUp}>SIGN UP</Text>
        </TouchableOpacity>
        <Text style={styles.btnText}>
          By sign in or sign up, you agree to our Terms of Service and Privac y
          Policy
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height + statusBarHeight,
    position: "relative",
    backgroundColor: "black",
  },
  header: {
    width: width,
    position: "absolute",
    flexDirection: "row",
    marginTop: 50,
    flex: 1,
    justifyContent: "space-between",
  },
  logoText: {
    paddingHorizontal: 10,
    color: "#E50914",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 3,
    fontFamily: "sans-serif",
  },
  headerLanguage: {
    borderRadius: 30,
    color: "#fff",
    marginRight: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#fff",
    height: 40,
    width: 70,
  },
  body: {
    width: width,
    flex: 1,
    flexDirection: "column",
    position: "absolute",
    top: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyImage: {
    borderRadius: 20,
    width: 300,
    height: 340,
  },
  bodyText: {
    color: "#FCC434",
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 3,
    fontFamily: "sans-serif",
    marginTop: 20,
  },
  bodyTextSmall: {
    color: "#fff",
    fontSize: 14,
    letterSpacing: 2.5,
    fontFamily: "sans-serif",
    marginTop: 10,
  },
  btn: {
    top: height - 200,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnSignIn: {
    width: width - 48,
    height: 56,
    backgroundColor: "#FCC434",
    borderRadius: 64,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },
  btnSignUp: {
    width: width - 48,
    height: 56,
    backgroundColor: "black",
    borderRadius: 64,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
  },
  btnTextSignIn: {
    fontWeight: "bold",
    letterSpacing: 1,
    fontFamily: "sans-serif",
    color: "black",
  },
  btnTextSignUp: {
    color: "#F2F2F2",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    letterSpacing: 1,
  },
  btnText: {
    color: "#B3B3B3",
    marginTop: 20,
    fontFamily: "sans-serif",
    textAlign: "center",
    fontSize: 12,
    marginHorizontal: 20,
  },
});

export default Onboarding;
