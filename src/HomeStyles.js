import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        padding: 20,
    },
    bigBanner: {
        width: "100%",
        height: 180,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
        marginTop: 50,
    },
    bannerText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        padding: 10,
        borderRadius: 10,
    },
    grid: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    banner: {
        width: "48%",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 4,
        marginBottom: 15,
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 8,
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
    },
});
