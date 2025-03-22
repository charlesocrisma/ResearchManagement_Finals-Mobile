import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f7fa",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    card: {
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        elevation: 3,
    },
    stats: {
        fontSize: 16,
        color: "#555",
        marginTop: 5,
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 6,
        alignSelf: "flex-start",
    },
    buttonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
});
