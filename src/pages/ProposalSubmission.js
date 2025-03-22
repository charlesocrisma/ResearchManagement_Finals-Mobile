import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import { Picker } from "@react-native-picker/picker";
import ProposalStyles from "../ProposalStyles";

const ProposalSubmission = () => {
    const [name, setName] = useState("");
    const [studentNo, setStudentNo] = useState("");
    const [email, setEmail] = useState("");
    const [gradeLevel, setGradeLevel] = useState("");
    const [researchLink, setResearchLink] = useState("");
    const [service, setService] = useState("Student Research Charter");

    const handleSubmit = () => {
        console.log({
            name,
            studentNo,
            email,
            gradeLevel,
            researchLink,
            service
        });
    };

    return (
        <ImageBackground source={require("../assets/authscreenbackground.png")} style={ProposalStyles.background}>
            <View style={ProposalStyles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={ProposalStyles.title}>Research Proposal & Submission</Text>

                    <View style={ProposalStyles.row}>
                        <TextInput style={ProposalStyles.input} value={name} onChangeText={setName} placeholder="Name" />
                        <TextInput style={ProposalStyles.input} value={studentNo} onChangeText={setStudentNo} placeholder="Student No." />
                    </View>

                    <TextInput style={ProposalStyles.inputFull} value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" />

                    <TextInput style={ProposalStyles.inputFull} value={gradeLevel} onChangeText={setGradeLevel} placeholder="Grade Level" />

                    <TextInput style={ProposalStyles.inputFull} value={researchLink} onChangeText={setResearchLink} placeholder="Research Link" />

                    <View style={ProposalStyles.dropdownContainer}>
                        <Picker selectedValue={service} style={ProposalStyles.picker} onValueChange={(itemValue) => setService(itemValue)}>
                            <Picker.Item label="Student Research Charter" value="Student Research Charter" />
                            <Picker.Item label="Thesis Review & Approval" value="Thesis Review & Approval" />
                            <Picker.Item label="Research Funding Request" value="Research Funding Request" />
                        </Picker>
                    </View>

                    <TouchableOpacity style={ProposalStyles.submitButton} onPress={handleSubmit}>
                        <Text style={ProposalStyles.submitText}>SUBMIT</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </ImageBackground>
    );
};

export default ProposalSubmission;
