import React, { useState } from "react";
import { View, Text, FlatList, RefreshControl, TouchableOpacity } from "react-native";
import { Card, Avatar } from "react-native-paper";
import styles from "../RepositoryStyles";

const RepositoryPage = () => {

    const [repositories, setRepositories] = useState([
        { id: "1", name: "Research1", owner: "Winchell", },
        { id: "2", name: "Research2", owner: "Carlos", },
        { id: "3", name: "Research3", owner: "De Los Santos", },
    ]);

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    };

    const renderItem = ({ item }) => (
        <Card style={styles.card}>
            <Card.Title
                title={item.name}
                subtitle={`By ${item.owner}`}
                left={(props) => <Avatar.Icon {...props} icon="folder" />}
            />
            <Card.Actions>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>View</Text>
                </TouchableOpacity>
            </Card.Actions>
        </Card>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Research Repositories</Text>

            <FlatList
                data={repositories}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
        </View>
    );
};

export default RepositoryPage;
