import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { logout } from '../services/auth';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
    
    const navigation = useNavigation();
  
    const handleLogout = async () => {
      try {
        await logout();
        navigation.replace('Login');
        console.log("User Logged Out");
      } catch (error) {
        console.error("Log Out Error: ", error.message);
        throw error;
      }
    };
  
    return (
      <View style={styles.button}>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white', // Sets the background color to black
        paddingVertical: 12,      // Adds vertical padding
        paddingHorizontal: 20,    // Adds horizontal padding
        borderRadius: 8,          // Rounds the corners slightly
        alignItems: 'center',     // Centers text horizontally
        justifyContent: 'center', // Centers text vertically
        // Optional: Add shadow for a more "boxed" look
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // For Android shadow
      },
      buttonText: {
        color: 'black', // Sets the text color to white for contrast
        fontSize: 16,
        fontWeight: 'bold',
      },
    });

export default SettingsScreen;
