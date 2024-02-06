import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { useState } from "react";
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

const App = () => {
  const [input, setInput] = useState("");

  const handleButtonPress = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleEqualPress = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClearPress = () => {
    setInput("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.Cal}>
        <TextInput
          style={styles.input}
          value={input}
          editable={false}
        />
      </View>
      <View style={styles.buttonStyle1}>
        <TouchableOpacity
          style={styles.circleButton1}
          onPress={() => handleClearPress()}
        >
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.circleButton1}
          onPress={() => handleButtonPress("+/-")}
        >
          <Text style={styles.buttonText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.circleButton1}
          onPress={() => handleButtonPress("%")}
        >
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.circleButton2}
          onPress={() => handleButtonPress("/")}
        >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonStyle2}>
  <TouchableOpacity
    style={styles.circleButton3}
    onPress={() => handleButtonPress("7")}
  >
    <Text style={styles.buttonText}>7</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.circleButton3}
    onPress={() => handleButtonPress("8")}
  >
    <Text style={styles.buttonText}>8</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.circleButton3}
    onPress={() => handleButtonPress("9")}
  >
    <Text style={styles.buttonText}>9</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.circleButton2}
    onPress={() => handleButtonPress("*")}
  >
    <Text style={styles.buttonText}>x</Text>
  </TouchableOpacity>
</View>

      <View style={styles.buttonStyle2}>
  <TouchableOpacity
    style={styles.circleButton3}
    onPress={() => handleButtonPress("4")}
  >
    <Text style={styles.buttonText}>4</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.circleButton3}
    onPress={() => handleButtonPress("5")}
  >
    <Text style={styles.buttonText}>5</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.circleButton3}
    onPress={() => handleButtonPress("6")}
  >
    <Text style={styles.buttonText}>6</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.circleButton2}
    onPress={() => handleButtonPress("-")}
  >
    <Text style={styles.buttonText}>-</Text>
  </TouchableOpacity>
</View>

      <View style={styles.buttonStyle2}>
  <TouchableOpacity
    style={styles.circleButton3}
    onPress={() => handleButtonPress("1")}
  >
    <Text style={styles.buttonText}>1</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.circleButton3}
    onPress={() => handleButtonPress("2")}
  >
    <Text style={styles.buttonText}>2</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.circleButton3}
    onPress={() => handleButtonPress("3")}
  >
    <Text style={styles.buttonText}>3</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.circleButton2}
    onPress={() => handleButtonPress("+")}
  >
    <Text style={styles.buttonText}>+</Text>
  </TouchableOpacity>
</View>

      <View style={styles.buttonStyle2}>
  <TouchableOpacity
    style={styles.circleButton4}
    onPress={() => handleButtonPress("0")}
  >
    <Text style={styles.buttonText}>0</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.circleButton3}
    onPress={() => handleButtonPress(".")}
  >
    <Text style={styles.buttonText}>.</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.circleButton2}
    onPress={handleEqualPress}
  >
    <Text style={styles.buttonText}>=</Text>
  </TouchableOpacity>
</View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  Cal: {
    flexDirection: "row",
    alignSelf: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    width: responsiveWidth(100),
    textAlign: "right",
    fontSize:responsiveFontSize(3)
  },
  buttonStyle1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  buttonStyle2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  circleButton1: {
    width: responsiveHeight(10),
    height: responsiveHeight(10),
    borderRadius: 50,
    backgroundColor: "#D3D3D3", // Customize the background color as needed
    alignItems: "center",
    justifyContent: "center",
  },
  circleButton2: {
    width: responsiveHeight(10),
    height: responsiveHeight(10),
    borderRadius: 50,
    backgroundColor: "#FDDA0D", // Customize the background color as needed
    alignItems: "center",
    justifyContent: "center",
  },
  circleButton3: {
    width: responsiveHeight(10),
    height: responsiveHeight(10),
    borderRadius: 50,
    backgroundColor: "grey", // Customize the background color as needed
    alignItems: "center",
    justifyContent: "center",
  },
  circleButton4: {
    width: responsiveWidth(50),
    height: responsiveHeight(10),
    borderRadius: 75,
    backgroundColor: "grey", // Customize the background color as needed
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize:22 // Customize the text color as needed
  },
});

export default App;
