import React, { useState } from "react";
import {
    View, Text, TextInput, TouchableOpacity, StatusBar, Image,
    ImageBackground, Alert
} from "react-native";
import AuthStyles from "../AuthStyles";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = () => {
        if (email === "test@gmail.com" && password === "test123") {
            navigation.navigate("Home");
        } else {
            Alert.alert("Login Failed", "Invalid email or password. Please try again.");
        }
    };

    return (
        <ImageBackground
            source={require("../assets/authscreenbackground.png")}
            style={AuthStyles.backgroundImage}
        >
            <View style={AuthStyles.container}>
                <StatusBar barStyle="light-content" />

                <Image
                    source={require("../assets/logo.png")}
                    style={AuthStyles.authImage}
                    resizeMode="contain"
                />

                <Text style={AuthStyles.authTitle}>Welcome Back</Text>
                <Text style={AuthStyles.authSubtitle}>Log in to continue</Text>

                <TextInput
                    style={AuthStyles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={AuthStyles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={AuthStyles.primaryButton} onPress={handleLogin}>
                    <Text style={AuthStyles.buttonText}>Login</Text>
                </TouchableOpacity>

                <Text style={AuthStyles.linkText}>
                    Don't have an account?{" "}
                    <Text style={AuthStyles.linkHighlight} onPress={() => navigation.navigate("Register")}>
                        Sign Up
                    </Text>
                </Text>
            </View>
        </ImageBackground>
    );
}
