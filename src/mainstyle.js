import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    logo: {
        width: 130,
        height: 130,
        marginBottom: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginBottom: 10,
        textShadowColor: "rgba(0, 0, 0, 0.3)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    subtitle: {
        fontSize: 16,
        color: "#eee",
        textAlign: "center",
        marginBottom: 30,
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
    secondaryButton: {
        backgroundColor: "rgba(76, 175, 80, 0.9)",
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center",
        width: "80%",
        elevation: 3,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    footerText: {
        marginTop: 20,
        fontSize: 12,
        color: "#ddd",
        textAlign: "center",
    },
});
