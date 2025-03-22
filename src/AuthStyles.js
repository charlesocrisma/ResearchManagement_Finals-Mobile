import { StyleSheet } from "react-native";

const AuthStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    backgroundImage: {
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    authImage: {
        width: 130,
        height: 130,
        marginBottom: 20,
    },
    authTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginBottom: 5,
        textShadowColor: "rgba(0, 0, 0, 0.3)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    authSubtitle: {
        fontSize: 16,
        color: "#eee",
        textAlign: "center",
        marginBottom: 30,
    },
    input: {
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        padding: 12,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 16,
        color: "#333",
        borderWidth: 1,
        borderColor: "#ddd",
        elevation: 2,
    },
    pickerContainer: {
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        marginBottom: 15,
        elevation: 2,
    },
    picker: {
        width: "100%",
        height: 50,
        color: "#333",
    },
    primaryButton: {
        backgroundColor: "rgba(42, 157, 244, 0.9)",
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center",
        width: "80%",
        elevation: 3,
        marginBottom: 15,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    linkText: {
        fontSize: 14,
        color: "#ddd",
    },
    linkHighlight: {
        color: "#2a9df4",
        fontWeight: "bold",
    },
});

export default AuthStyles;
