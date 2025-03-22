import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
    },
    progressBarContainer: {
        width: "80%",
        height: 15,
        backgroundColor: "#ddd",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 20,
    },
    progressBar: {
        height: "100%",
    },
    progressSteps: {
        alignItems: "center",
    },
    activeStep: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#007BFF",
        marginVertical: 5,
    },
    inactiveStep: {
        fontSize: 18,
        color: "#aaa",
        marginVertical: 5,
    },
});
