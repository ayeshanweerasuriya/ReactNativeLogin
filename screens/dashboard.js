import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();
  const handleSignin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.topImage}
        source={require("../assets/VectorTop.png")}
      />
      <View>
        <TouchableOpacity>
          <Image
            style={styles.bellBtn}
            source={require("../assets/bell.png")}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Welcome, Ayeshan</Text>
      <Image style={styles.proPic} source={require("../assets/pro.png")} />
      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.mainButtontxt}>Leave Request</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.mainButtontxt}>Pay slip access</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.mainButtontxt}>HR Policies & documentations</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <Button title="Sign Out" onPress={handleSignin} color="#000" />
      </View>
      <Image
        style={styles.BottomImage}
        source={require("../assets/VectorLeft.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "white" },

  topImage: {
    height: 119,
    width: 375,
  },

  bellBtn: {
    marginLeft: 250,
    width: 30,
    height: 30,
  },

  title: {
    fontSize: 25,
    marginTop: 30,
    fontWeight: "500",
    color: "#262626",
    marginBottom: 20,
  },

  proPic: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },

  mainButton: {
    backgroundColor: "#973DC2",
    borderRadius: 50,
    padding: 10,
    width: "80%",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },

  mainButtontxt: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },

  buttonContainer: {
    marginTop: 50,
    borderRadius: 50,
    overflow: "hidden",
    width: "40%",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
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

export default Dashboard;
