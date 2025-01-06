import React from "react";
import { Pressable, Text, Image, Alert, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from "../configAPI";

const LogoutButton = ({ logoSource, buttonText }) => {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const accessToken = await AsyncStorage.getItem("accessToken");
            if (!accessToken) {
                Alert.alert("Error", "No se encontró el token de usuario");
                return;
            }

            const location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;

            const requestData = {
                type: 'LOGOUT',
                location: { latitude, longitude }
            };

            const response = await fetch(`${API_URL}/checks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(requestData)
            });

            if (!response.ok) {
                throw new Error("Error al registrar el logout en el servidor");
            }

            await AsyncStorage.multiRemove([
                "accessToken",
                "refreshToken",
                "userData"
            ]);
    
            router.push("/login");
            
        } catch (error) {
            console.error('Error durante el logout:', error);
            Alert.alert(
                "Error", 
                "No se pudo cerrar la sesión correctamente. Por favor, intente nuevamente."
            );
        }
    };

    return (
        <Pressable style={styles.button} onPress={handleLogout}>
            <Image source={logoSource} style={styles.logo} />
            <Text style={styles.buttonText}>{buttonText}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 30,
        paddingTop: 20,
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
        resizeMode: "contain",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default LogoutButton;
