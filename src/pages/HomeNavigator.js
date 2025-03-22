import React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeStyles from "../HomeStyles";

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={HomeStyles.container}>

            <ImageBackground source={require("../assets/authscreenbackground.png")} style={HomeStyles.bigBanner} imageStyle={{ borderRadius: 15 }}>
                <Text style={HomeStyles.bannerText}>Research & Publication Department</Text>
            </ImageBackground>


            <View style={HomeStyles.grid}>
                <TouchableOpacity style={HomeStyles.banner} onPress={() => navigation.navigate("ProposalSubmission")}>
                    <Image source={require("../assets/submit.png")} style={HomeStyles.icon} />
                    <Text style={HomeStyles.text}>Proposal</Text>
                </TouchableOpacity>

                <TouchableOpacity style={HomeStyles.banner} onPress={() => navigation.navigate("ProgressTracking")}>
                    <Image source={require("../assets/progress.png")} style={HomeStyles.icon} />
                    <Text style={HomeStyles.text}>Progress</Text>
                </TouchableOpacity>

                <TouchableOpacity style={HomeStyles.banner} onPress={() => navigation.navigate("Repository")}>
                    <Image source={require("../assets/repository.png")} style={HomeStyles.icon} />
                    <Text style={HomeStyles.text}>Repository</Text>
                </TouchableOpacity>


            </View>
        </View>
    );
}
