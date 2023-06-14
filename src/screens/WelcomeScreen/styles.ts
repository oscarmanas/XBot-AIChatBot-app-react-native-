import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    //alignItems: "center",
    backgroundColor: "#1C1C1E",
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 60,
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#FFFFFF",
    //textAlign: "center",
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 20,
    //textAlign: "center",
    marginBottom: 48,
    color: "#FFFFFF",
    lineHeight: 25,
  },
  images: {
    width: Dimensions.get("window").width - 40,
    height: 300,
    marginBottom: 50
  },
  button: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: "#F0433A",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#FFFFFF"
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    letterSpacing: 1,
  },
});
