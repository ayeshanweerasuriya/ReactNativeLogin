import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // To save email and password

const Login = ({ route }) => {
  const { bringemail, bringpassword } = route.params || {};
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  // To save email and password
  useEffect(() => {
    // Load saved email and password from AsyncStorage
    const loadAuthenticationInformation = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem("email");
        const savedPassword = await AsyncStorage.getItem("password");

        if (savedEmail && savedPassword) {
          setUsername(savedEmail);
          setPassword(savedPassword);
        }
      } catch (error) {
        console.error("Error loading authentication information:", error);
      }
    };

    loadAuthenticationInformation();
  }, []);
  //

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  const handleFormSubmit = () => {
    const correctUsername = bringemail;
    const correctPassword = bringpassword;

    if (password === correctPassword && username === correctUsername) {
      Alert.alert("Welcome!");
      navigation.navigate("Dashboard");
    } else {
      Alert.alert("Your password or username incorrect");
    }

    setUsername("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.topImage}
        source={require("../assets/VectorTop.png")}
      />
      <Text style={styles.heading}>Hello</Text>
      <Text style={styles.title}>Login to your account</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputIconContainer}>
          <Image
            style={styles.inputIcon}
            source={require("../assets/username.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={handleUsernameChange}
          />
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
            value={password}
            onChangeText={handlePasswordChange}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.forgetPassword}>
        <Text style={styles.forgetPasswordtxt}>Forget your password?</Text>
      </TouchableOpacity>
      <View>
        <View style={styles.signInContainer}>
          <Text style={styles.signIntxt}>Login</Text>
          <TouchableOpacity onPress={handleFormSubmit}>
            <Image
              style={styles.signInBtn}
              source={require("../assets/signIn.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.signInContainer}>
          <Text style={styles.signUptxt}>Signup</Text>
          <TouchableOpacity onPress={handleSignup}>
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
  forgetPassword: {
    marginRight: 50,
    marginBottom: 60,
    alignSelf: "flex-end",
  },
  forgetPasswordtxt: {
    color: "#C8C8C8",
  },
  signInContainer: {
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 115,
  },

  signIntxt: {
    marginRight: 20,
    fontSize: 30,
    fontWeight: "500",
  },

  signInBtn: {
    height: 34,
    width: 56,
  },

  signUptxt: {
    marginRight: 20,
    fontSize: 20,
    fontWeight: "500",
  },

  signUpBtn: {
    height: 30,
    width: 52,
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

export default Login;
