import { Dimensions, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { theme } from "../../../themes";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("screen").width,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.brand.primary,
  },
  signUpContainer: {
    backgroundColor: "white",
    width: "85%",
    height: Dimensions.get("screen").height * 0.6,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "85%",
    height: "50%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: "100%",
    height: 40,
    borderRadius: 30,
    padding: 10,
    backgroundColor: theme.colors.ui.tertiary,
  },
  passwordShow: {
    color: theme.colors.text.primary,
    fontWeight: "bold",
    position: "relative",
    zIndex: 1,
    right: 50,
  },
  button: {
    backgroundColor: theme.colors.brand.primary,
    width: "60%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  firstText: {
    color: theme.colors.text.primary,
    fontWeight: "bold",
  },
  secondText: {
    color: theme.colors.text.secondary,
    textDecorationLine: "underline",
  },
  passwordInput: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});