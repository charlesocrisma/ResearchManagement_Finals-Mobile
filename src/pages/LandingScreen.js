import React from "react";
import { View, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from "react-native";
import styles from "../mainstyle";
import { useNavigation } from "@react-navigation/native";

export default function LandingScreen() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require("../assets/authscreenbackground.png")}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />

                <Image
                    source={require("../assets/logo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <Text style={styles.title}>
                    Welcome to the{"\n"}Research & Publication Department
                </Text>

                <Text style={styles.subtitle}>
                    Explore, publish, and connect with researchers.
                </Text>

                <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.secondaryButton}
                    onPress={() => navigation.navigate("Register")}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                <Text style={styles.footerText}>
                    © 2025 Colegio De San Juan De Letran
                </Text>
            </View>
        </ImageBackground>
    );
}
