import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image, ImageBackground } from "react-native";
import { Picker } from "@react-native-picker/picker";
import AuthStyles from "../AuthStyles";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [studentNo, setStudentNo] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [grade, setGrade] = useState("College");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigation = useNavigation();

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

                <Text style={AuthStyles.authTitle}>Create an Account</Text>
                <Text style={AuthStyles.authSubtitle}>Join us today!</Text>

                <TextInput
                    style={AuthStyles.input}
                    placeholder="Student Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={AuthStyles.input}
                    placeholder="Student Number"
                    keyboardType="numeric"
                    value={studentNo}
                    onChangeText={setStudentNo}
                />

                <TextInput
                    style={AuthStyles.input}
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                />

                <TextInput
                    style={AuthStyles.input}
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={setLastName}
                />

                <View style={AuthStyles.pickerContainer}>
                    <Picker
                        selectedValue={grade}
                        onValueChange={(itemValue) => setGrade(itemValue)}
                        style={AuthStyles.picker}
                    >
                        <Picker.Item label="College" value="College" />
                        <Picker.Item label="Senior High School" value="Senior High School" />
                    </Picker>
                </View>

                <TextInput
                    style={AuthStyles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TextInput
                    style={AuthStyles.input}
                    placeholder="Confirm Password"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <TouchableOpacity style={AuthStyles.primaryButton}>
                    <Text style={AuthStyles.buttonText}>Register</Text>
                </TouchableOpacity>

                <Text style={AuthStyles.linkText}>
                    Already have an account?{" "}
                    <Text style={AuthStyles.linkHighlight} onPress={() => navigation.navigate("Login")}>
                        Log In
                    </Text>
                </Text>
            </View>
        </ImageBackground>
    );
}
