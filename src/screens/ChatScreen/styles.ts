import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
  },
  composerTextInput: {
    color: "#FFFFFF", // Texto en blanco
    backgroundColor: "#333333", // Fondo gris oscuro para el input
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 5,
  },
  additionalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "white",
    paddingVertical: 6,
  },
  renderSend: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  modalText: {
    marginTop: 10,
    marginHorizontal: 10,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 48,
    color: "white",
    lineHeight: 30,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#F0433A",
    paddingVertical: 12,
    marginHorizontal: 30,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: "bold",
  },
  inputTool: {
    backgroundColor: "#0A0A0A",
    borderTopWidth: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  exampleList: {
    flexGrow: 1,
  },
  exampleCategory: {
    fontSize: 22,
    fontWeight: "bold",
    paddingVertical: 10,
    textAlign: "center",
    color: "#ffffff",
    textTransform: "uppercase",
  },
  examplePromptList: {
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  teslaButton: {
    backgroundColor: "#1c1c1e",
    borderRadius: 10,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 7,
  },
  exampleItem: {
    color: "#e6e6e6",
    fontSize: 16,
    fontWeight: "500",
  },
  bubbleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  heartIconContainer: {
    position: 'absolute',
    top: -8,
    right: 370,
    borderRadius: 15,
    padding: 2,
  },
});