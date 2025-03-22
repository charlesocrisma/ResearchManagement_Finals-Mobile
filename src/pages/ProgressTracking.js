import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper";
import styles from "../ProgressStyles";

const ProgressScreen = () => {
    const [progress, setProgress] = useState(0.25);

    const updateProgress = () => {
        setProgress((prev) => (prev + 0.25 > 1 ? 1 : prev + 0.25));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Research Progress Tracking</Text>


            <View style={styles.progressBarContainer}>
                <ProgressBar progress={progress} color="#007BFF" style={styles.progressBar} />
            </View>


            <View style={styles.progressSteps}>
                <Text style={progress >= 0.25 ? styles.activeStep : styles.inactiveStep}>📄 Submitted</Text>
                <Text style={progress >= 0.5 ? styles.activeStep : styles.inactiveStep}>🔍 Under Review</Text>
                <Text style={progress >= 0.75 ? styles.activeStep : styles.inactiveStep}>✅ Approved</Text>
                <Text style={progress === 1 ? styles.activeStep : styles.inactiveStep}>📚 Published</Text>
            </View>

        </View>
    );
};

export default ProgressScreen;
