import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("Dashboard");
  };

  const handleSignin = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.topImage}
        source={require("../assets/VectorTop.png")}
      />
      <Text style={styles.heading}>Hello</Text>
      <Text style={styles.title}>Please fill this form to Signup</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputIconContainer}>
          <Image
            style={styles.inputIcon}
            source={require("../assets/username.png")}
          />
          <TextInput style={styles.input} placeholder="Type your E-mail" />
        </View>
        <View style={styles.inputIconContainer}>
          <Image
            style={styles.inputIcon}
            source={require("../assets/password.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
        </View>
        <View style={styles.inputIconContainer}>
          <Image
            style={styles.inputIcon}
            source={require("../assets/password.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
          />
        </View>
      </View>
      <TouchableOpacity style={styles.wannaLogin} onPress={handleSignin}>
        <Text style={styles.wannaLogintxt}>Wanna login?</Text>
      </TouchableOpacity>
      <View>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUptxt}>Signup</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Image
              style={styles.signUpBtn}
              source={require("../assets/signUp.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        style={styles.BottomImage}
        source={require("../assets/VectorLeft.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  topImage: {
    height: 119,
    width: 375,
  },
  heading: {
    marginTop: 50,
    fontSize: 60,
    fontWeight: "500",
    color: "#262626",
  },
  title: {
    fontSize: 18,
    marginTop: 15,
    fontWeight: "500",
    color: "#262626",
    marginBottom: 40,
  },
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  inputIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    borderColor: "white",
    borderRadius: 50,
    borderWidth: 1,
    width: 280,
    height: 50,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },

  inputIcon: {
    marginLeft: 15,
    marginRight: 10,
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  input: {
    color: "#C8C8C8",
    width: "70%",
  },
  wannaLogin: {
    marginRight: 50,
    marginBottom: 60,
    alignSelf: "flex-end",
  },
  wannaLogintxt: {
    color: "#C8C8C8",
  },
  signUpContainer: {
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 115,
  },

  signUptxt: {
    marginRight: 20,
    fontSize: 30,
    fontWeight: "500",
  },

  signUpBtn: {
    height: 34,
    width: 56,
  },

  BottomImage: {
    alignSelf: "flex-start",
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 271,
    width: 94,
  },
});

export default Signup;
