import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subscriptionOption: {
    width: "80%",
    padding: 20,
    backgroundColor: "#1D1D1D",
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
  },
  subscriptionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 15,
    textAlign: "center",
  },
  subscriptionPrice: {
    fontSize: 20,
    color: "#999999",
    marginBottom: 10,
    textAlign: "center",
  },
  benefitsContainer: {
    marginVertical: 30,
    alignItems: "flex-start",
  },
  benefitText: {
    marginLeft: 6,
    fontSize: 14,
    color: "#FFFFFF",
  },
  skip: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  bestSellerContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#FFC107",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopRightRadius: 6,
  },
  bestSellerText: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
  },
});
